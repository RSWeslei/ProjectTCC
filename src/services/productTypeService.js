import { fetchData } from './fetchService';

const fetchProductTypes = async () => {
    try {
        return await fetchData('/product-types');
    } catch (error) {
        console.error('Erro ao buscar tipos de produtos:', error);
        throw error;
    }
};

export { fetchProductTypes };
