import axios from 'axios'
import { API_PATH } from '../config/urlConfig'

const DEFAULT_REQUEST_CONFIG = {
    headers: {
        'Content-Type': 'application/json'
    },
}

const client = {
    getCocktails() {
        const url = `${API_PATH}/cocktails`
        return axios.get(url, DEFAULT_REQUEST_CONFIG)
    },

    createCocktail(dataCocktail) {
        const url = `${API_PATH}/cocktails`
        return axios.post(url, {dataCocktail}, DEFAULT_REQUEST_CONFIG)
            .then(res => res.json())
    }
}

export default client