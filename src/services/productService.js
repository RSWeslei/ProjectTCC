import { fetchData, postData } from './fetchService';

const fetchProduct = async () => {
    try {
        return await fetchData('/product')
    } catch (error) {
        throw error
    }
}

const fetchUserProduct = async () => {
    try {
        return await fetchData('/product-user')
    } catch (error) {
        throw error
    }
}

const createProduct = async (product) => {
    try {
        return await postData('/product', product);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        return await postData(`/product/${productId}`, productData, {
            method: 'PUT',
        });
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        throw error;
    }
};

const deleteProduct = async (productId) => {
    try {
        return await fetchData(`/product/${productId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
};

export { fetchProduct, createProduct, updateProduct, deleteProduct, fetchUserProduct };
