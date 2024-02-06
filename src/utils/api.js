import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:4000/api/v1', 
    baseURL: 'https://anna-solovykh-bookworm.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
