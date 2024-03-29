import L from 'leaflet'
import markerIcon from 'svg-url-loader!./marker-pin.svg' // Import the SVG

export const mapController = (mapWrapper) => {
    const tileProvider = `https://tile.openstreetmap.de/{z}/{x}/{y}.png`
    const handlerPositionMap = (lat, lng) => {
        const map = L.map(mapWrapper, {
            center: [lat, lng],
            zoom: 15,
            maxZoom: 18,
            minZoom: 3
        })
        renderMap(map, lat, lng);
    }

    const renderMap = (map, lat, lng) => {
        L.tileLayer(tileProvider).addTo(map);
        const market = L.marker(
            [lat,  lng], 
            { icon: L.icon({ iconUrl: markerIcon, iconSize: [30, 30] }) }
            ).addTo(map)

    }
    return{
        handlerPositionMap
    }
    
}