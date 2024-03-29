export const buildViewGoeData = (geoData) => {
  return `
	<div class="view-content">
    <div class="item">
        <div class="p-4">
            <p class="text-lg font-semibold mb-2 text-white">IP</p>
            <h2 class="h3 mb-4 text-white">
            	${geoData.ip}
            </h2>
        </div>
    </div>
		<div class="item">
        <div class="p-4">
            <p class="text-lg font-semibold mb-2 text-white">Localización</p>
            <h2 class="h3 text-white">
            	${geoData.location.city},
            </h2>
			<h2 class="text-sm mb-4 text-white">
				${geoData.location.region},${geoData.location.country}
            </h2>
        </div>
    </div>
		<div class="item">
        <div class="p-4">
            <p class="text-lg font-semibold mb-2 text-white">Zona horaria</p>
            <h2 class="h3 mb-4 text-white">
            	${geoData.location.timezone}
            </h2>
        </div>
    </div>
		<div class="item">
        <div class="p-4">
            <p class="text-lg font-semibold mb-2 text-white">ISP</p>
            <h2 class="h3 mb-4 text-white">
            	${geoData.isp}
            </h2>
						 <h2 class="text-sm mb-4 text-white">
            	${geoData.as.name}
            </h2>
        </div>
    </div>
	</div>
  `
}
