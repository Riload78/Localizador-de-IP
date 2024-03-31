import L from 'leaflet'
import markerIcon from 'svg-url-loader!./marker-pin.svg' // Import the SVG

export const mapController = (mapWrapper) => {
    const tileProvider = `https://tile.openstreetmap.de/{z}/{x}/{y}.png`
    let map

    const renderMap = (lat, lng) => {
        if (!map) {
            map = L.map(mapWrapper, {
                center: [lat, lng],
                zoom: 15,
                maxZoom: 18,
                minZoom: 3
            });
            console.log(map);
        } else {
            map.setView([lat, lng], 15)
        }
        L.tileLayer(tileProvider).addTo(map);
        L.marker([lat, lng], { icon: L.icon({ iconUrl: markerIcon, iconSize: [30, 30] }) }).addTo(map)
    };

    const handlerPositionMap = (lat, lng) => {
        renderMap(lat, lng)
    }

    return {
        handlerPositionMap,
    };
}