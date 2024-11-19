import {getToken} from './userService'

const API_URL = 'http://192.168.3.11:3000'

const fetchData = async (endpoint, options = {}) => {
    const token = await getToken()
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
        })

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Erro ao buscar dados:", error)
        throw error
    }
}

const postData = async (endpoint, data, options = {}) => {
    const token = await getToken() // Obtém o token antes de fazer a requisição

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    }

    // Se o token existir, adiciona ao cabeçalho Authorization
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
            ...options,
        })

        const jsonResponse = await response.json()
        console.log("response", jsonResponse)
        return jsonResponse;
    } catch (error) {
        console.error("Erro ao enviar dados:", JSON.stringify(error))
        throw error
    }
}

const loadImage = (imagePath) => {
    try {
        if (!imagePath) {
            return '';
        }
        return `${API_URL}/${imagePath.replace(/\\/g, '/')}`;
    } catch (error) {
        throw error
    }
}

export { fetchData, loadImage, postData }
