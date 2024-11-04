const API_URL = 'http://192.168.3.11:3000'

const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, options)
        console.log(response)
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error("Erro ao buscar dados:", error)
        throw error
    }
}

const loadImage = (imagePath) => {
    try {
        if (!imagePath) {
            return '';
        }
        return `${API_URL}/${imagePath.replace(/\\/g, '/',)}`;
    } catch (error) {
        throw error
    }
}

export { fetchData, loadImage }
