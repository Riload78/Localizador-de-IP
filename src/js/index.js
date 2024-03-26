import { trackerController } from './tracker/trackerController.js'
import { mapController } from './map/mapController.js'

window.addEventListener('DOMContentLoaded', () => {
  const ipWrapper = document.querySelector('.data-ip-wrapper')
  const mapWrapper = document.querySelector('.map-wrapper')
  trackerController(ipWrapper)
  mapController(mapWrapper)

  ipWrapper.addEventListener('geodata', (event) =>{
    console.log(event)
  })

})
