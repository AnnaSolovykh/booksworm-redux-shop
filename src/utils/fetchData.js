import axios from 'axios';

const jwtToken = sessionStorage.getItem('jwtToken');

export const login = (email, password) => {
    return axios.post(`http://localhost:4000/api/v1/auth/login`, 
        {
            email: email,
            password: password
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
};

export const register = (name, email, password) => {
    return axios.post(`http://localhost:4000/api/v1/auth/register`, 
        {
            name: name,
            email: email,
            password: password
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
};

export const getBooks = () => {
    return axios.get(`http://localhost:4000/api/v1/books`, 
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
        }
    });
};