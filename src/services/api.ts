import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.142:8080'
});

export default api;
