export const getTrackIp = async () => {
  const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_fe3WmWgSiqENzC5C4xUxaThWSDfXR'
  //const url = `${apiUrl}country,city?apiKey=${apiKey}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
