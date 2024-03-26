import { getTrackIp } from './trackerModel.js'
import { buildViewGoeData } from './trackerView.js'
import { dispatchEvent } from '../../../helper/dispatchEvent.js'

export const trackerController = async (ipWrapper) => {

  const handlerGetTrackIp = async (latitude, longitude) => {
    const geoData = await getTrackIp()
    dispatchEvent()
    return geoData
  }
  // pedir permiso de geolocalizacion al usuario
  const browserGeoLocation = async () => {
    try {
      // Pass a success callback function as the first argument
      const successCallback = (position) => {
        const coords = position.coords
        console.log(coords)
        const { latitude, longitude } = coords // Destructuring for cleaner code
        // llamo a la api
      }

      // Pass an error callback function as the second argument
      const errorCallback = (error) => {
        console.error('Geolocation permission denied or unavailable:', error)
      }

      // Call the method with the success and error callback functions
      return navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    } catch (error) {
      console.error('Geolocation permission denied or unavailable:', error)
    }
  }

  const buildGeoData = (geodata) => {
    ipWrapper.innerHTML = buildViewGoeData(geodata)
  }

  if (typeof navigator.geolocation === 'undefined') {
    console.warn('Geolocación no soportada por este navegador.')
  } else {
    await browserGeoLocation()
    const geoData = await handlerGetTrackIp()
    buildGeoData(geoData)
  }
}
