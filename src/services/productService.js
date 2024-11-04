import { fetchData } from './fetchService'

const fetchProduct = async () => {
    try {
        return await fetchData('/product')
    } catch (error) {
        throw error
    }
}

export { fetchProduct }