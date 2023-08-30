import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.254.129:5005',
  timeout: 10000,
});

export default instance;
