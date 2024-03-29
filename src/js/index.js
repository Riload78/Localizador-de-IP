import { trackerController } from './tracker/trackerController.js'
import { mapController } from './map/mapController.js'
import { searchController } from './search/searchController.js'

window.addEventListener('DOMContentLoaded', () => {
  const ipWrapper = document.querySelector('.data-ip-wrapper')
  const mapWrapper = document.querySelector('.map-wrapper')
  const searchWrapper = document.querySelector('#ipTrackerForm')
  const { handlerPositionMap } = mapController(mapWrapper)
  
  ipWrapper.addEventListener('geodata', (event) =>{
    console.log(event.detail.lat)
    handlerPositionMap(event.detail.lat, event.detail.lng)
  })
  searchController(searchWrapper)
  trackerController(ipWrapper)
})
