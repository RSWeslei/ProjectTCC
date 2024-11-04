import { fetchData } from './fetchService'

const fetchProducer = async () => {
    try {
        return await fetchData('/producer')
    } catch (error) {
        throw error
    }
}

export { fetchProducer }