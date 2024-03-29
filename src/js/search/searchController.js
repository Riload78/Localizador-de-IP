import { isValidDomain, isValidIp } from '../helper/validation.js'
import { getTrackPosition } from '../search/searchModel.js'



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
        const trackDomainData = await getTrackPosition(search)
        console.log(trackDomainData);
    }
    // 1 añadir el evento submit
    const btnSubmit = searchWrapper.querySelector('#submit-search')
    searchWrapper.addEventListener("submit", handlerSearchSubmit);


}