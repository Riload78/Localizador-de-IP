
export const getTrackPosition = async (search) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_CQAT3XgVeWI6UJbInOIy8jioEm3x1&i&domain=${search}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

