import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.254.129:5005',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // any other common headers can go here
  },
});

// Global error handling
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle the error as you see fit
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
