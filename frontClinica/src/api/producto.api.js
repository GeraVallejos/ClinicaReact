import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/producto/api/v1/producto/'
})

export const productosGet= () => {
    return axiosApi.get('/');
}

export const productosCrear= (producto) => {
    return axiosApi.post('/', producto);
}

