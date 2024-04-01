import { trackerController } from './tracker/trackerController.js'
import { mapController } from './map/mapController.js'
import { searchController } from './search/searchController.js'
import { notificationController } from './notification/notificationController.js'

window.addEventListener('DOMContentLoaded', () => {
  const ipWrapper = document.querySelector('.data-ip-wrapper')
  const mapWrapper = document.querySelector('.map-wrapper')
  const searchWrapper = document.querySelector('#ipTrackerForm')
  const notificationWrapper = document.querySelector('.notification-wrapper')
  const { handlerPositionMap } = mapController(mapWrapper)
  const { buildGeoData } = trackerController(ipWrapper)

  const { showNotification } = notificationController(notificationWrapper)
  
  ipWrapper.addEventListener('geodata', (event) =>{
    console.log(event.detail.lat)
    handlerPositionMap(event.detail.lat, event.detail.lng)
  })

  ipWrapper.addEventListener('notification-tracker', (event) => {
    showNotification(event.detail.type, event.detail.message)
  })

  searchWrapper.addEventListener('search-data', (event) => {
    console.log(event)
    buildGeoData(event.detail)
    handlerPositionMap(event.detail.location.lat, event.detail.location.lng)

  })



  searchController(searchWrapper)
})
