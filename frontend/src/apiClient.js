import axios from 'redaxios'

export default apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers['Authorization'] = `Bearer ${token}`
    } else {
        delete apiClient.defaults.headers['Authorization']
    }
}