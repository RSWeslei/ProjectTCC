import {fetchData, postData} from './fetchService'

const fetchProducer = async () => {
    try {
        return await fetchData('/producer')
    } catch (error) {
        throw error
    }
}

const createProducerAccount = async (data) => {
    try {
        console.log(data)
        return await postData('/producer', data)
    } catch (error) {
        throw error
    }
}

export { fetchProducer, createProducerAccount }