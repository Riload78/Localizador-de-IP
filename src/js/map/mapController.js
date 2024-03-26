import { map } from 'leaflet'

export const mapController = (mapWrapper) => {
    console.log(mapWrapper)
    const map = L.map('map', {
        center: [40.7128, -74.0060],
        zoom: 9,
        maxZoom: 18,
        minZoom: 3,
        layers: [mapWrapper.baseLayer]
    })
}