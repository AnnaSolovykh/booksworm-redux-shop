import api from './api'; 

export const login = (email, password) => {
    return api.post('/auth/login', { email, password });
};

export const register = (name, email, password) => {
    return api.post('/auth/register', { name, email, password });
};

export const logout = () => {
    return api.post('/auth/logout');
};

export const getFavorites = () => {
    return api.get('/books');
};

export const addBookToFavorites = (book) => {
    return api.post('/books', book);
};

export const removeBookFromFavorites = (bookId) => {
    return api.delete(`/books/${bookId}`);
};
