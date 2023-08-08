import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
    function (config) {
        // Obter o token do armazenamento local
        const token = localStorage.getItem('token');

        // Se o token existir, adicione-o ao cabeçalho Authorization
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        // Lidar com qualquer erro na solicitação
        return Promise.reject(error);
    }
);

export default axiosInstance;
