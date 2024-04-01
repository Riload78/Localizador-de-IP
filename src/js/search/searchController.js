import { isValidDomain, isValidIp } from '../helper/validation.js'
import { getTrackPosition } from '../search/searchModel.js'
import { dispatchEvent } from '../../../helper/dispatchEvent.js'



export const searchController = (searchWrapper) => {
    // 2 recoger los datos
    const handlerSearchSubmit = (event) =>{
        event.preventDefault()
        const search = event.target.search.value
        console.log(search);
        // validaciones
        
        const domainOk = isValidDomain(search)
        if(!domainOk) throw new Error('Invalid Domain')
        handlerDataSearch(search)
    }

    const handlerDataSearch = async (search) => {
        try {
            const trackDomainData = await getTrackPosition(search)
            console.log(trackDomainData);
            dispatchEvent('search-data', trackDomainData, searchWrapper)
            
        } catch (error) {
            console.error(error)
            dispatchEvent('notification-search', {type:'error', message: error.message})
        }
    }
    // 1 añadir el evento submit
    const btnSubmit = searchWrapper.querySelector('#submit-search')
    searchWrapper.addEventListener("submit", handlerSearchSubmit);


}