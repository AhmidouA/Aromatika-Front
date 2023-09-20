import axios from 'axios';

const BASE_URL = 'https://aromatika-back.vercel.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Set default headers for all requests
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authKey')}`;

export default axiosInstance;
