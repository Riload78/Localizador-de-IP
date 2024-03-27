import { trackerController } from './tracker/trackerController.js'
import { mapController } from './map/mapController.js'

window.addEventListener('DOMContentLoaded', () => {
  const ipWrapper = document.querySelector('.data-ip-wrapper')
  const mapWrapper = document.querySelector('.map-wrapper')
  const { handlerPositionMap } = mapController(mapWrapper)
  
  ipWrapper.addEventListener('geodata', (event) =>{
    console.log(event.detail.lat)
    handlerPositionMap(event.detail.lat, event.detail.lng)
  })
  
  trackerController(ipWrapper)
})
