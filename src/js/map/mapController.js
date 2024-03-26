import L from 'leaflet'

export const mapController = (mapWrapper) => {
    const tileProvider = `https://tile.openstreetmap.de/{z}/{x}/{y}.png`
    const map = L.map(mapWrapper, {
        center: [51.505, -0.09],
        zoom: 9,
        maxZoom: 18,
        minZoom: 3
    })
    L.tileLayer(tileProvider).addTo(map);
    const market = L.marker(
        [48.8566,  2.3522], 
        { icon: L.icon({ iconUrl: '/img/market-pin.svg', iconSize: [10, 10] }) }
        ).addTo(map)
}