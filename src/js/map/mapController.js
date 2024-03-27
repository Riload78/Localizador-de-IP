import L from 'leaflet'

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
            { icon: L.icon({ iconUrl: '/img/market-pin.svg', iconSize: [10, 10] }) }
            ).addTo(map)

    }
    return{
        handlerPositionMap
    }
    
}