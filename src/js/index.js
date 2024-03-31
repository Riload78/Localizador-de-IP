import { trackerController } from './tracker/trackerController.js'
import { mapController } from './map/mapController.js'
import { searchController } from './search/searchController.js'

window.addEventListener('DOMContentLoaded', () => {
  const ipWrapper = document.querySelector('.data-ip-wrapper')
  const mapWrapper = document.querySelector('.map-wrapper')
  const searchWrapper = document.querySelector('#ipTrackerForm')
  const { handlerPositionMap } = mapController(mapWrapper)
  const { buildGeoData } = trackerController(ipWrapper)
  
  ipWrapper.addEventListener('geodata', (event) =>{
    console.log(event.detail.lat)
    handlerPositionMap(event.detail.lat, event.detail.lng)
  })

  searchWrapper.addEventListener('search-data', (event) => {
    console.log(event)
    buildGeoData(event.detail)
    handlerPositionMap(event.detail.location.lat, event.detail.location.lng)

  })

  searchController(searchWrapper)
})
