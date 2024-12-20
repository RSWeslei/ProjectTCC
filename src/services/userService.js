import { fetchData, postData } from './fetchService'
import AsyncStorage from '@react-native-async-storage/async-storage'

const fetchUser = async (userId) => {
    try {
        return await fetchData('/user')
    } catch (error) {
        console.error(error)
        throw error
    }
}

const signUp = async (data) => {
    try {
        return await postData('/signup', data)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const login = async (email, password) => {
    try {
        const response = await postData('/login', { email, password })
        if (response.success && response.data.token) {
            await AsyncStorage.setItem('userToken', response.data.token)
        }
        return response
    } catch (error) {
        console.error('Erro ao realizar login:', error)
        throw error
    }
}

const getToken = async () => {
    try {
        return await AsyncStorage.getItem('userToken')
    } catch (error) {
        console.error('Erro ao recuperar o token:', error)
        throw error
    }
}

const logout = async () => {
    try {
        await AsyncStorage.removeItem('userToken')
    } catch (error) {
        console.error('Erro ao deslogar:', error)
        throw error
    }
}

const validateToken = async () => {
    try {
        const token = await getToken();
        if (!token) {
            return false;
        }

        const response = await fetchData('/validate-token', {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.success; // Retorna `true` se o token for válido
    } catch (error) {
        console.error('Erro ao validar token:', error);
        return false;
    }
};

export { fetchUser, signUp, login, getToken, logout, validateToken }
