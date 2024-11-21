import { fetchData } from './fetchService';

const fetchProductUnit = async () => {
    try {
        return await fetchData('/product-units');
    } catch (error) {
        console.error('Erro ao buscar unidades de produtos:', error);
        throw error;
    }
};

export { fetchProductUnit };
