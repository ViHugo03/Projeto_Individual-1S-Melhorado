import axios from 'axios';

const server = {
    Victor : '26.212.158.49',
    Trabalho : '26.150.219.242'
}

const axiosInstance = axios.create({
    baseURL: `http://${server.Trabalho}:3000`,
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
    function (config) {
        // Obter o token do armazenamento local
        const token = sessionStorage.getItem('token');

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
