import axios from 'axios';

// const baseURL = process.env.REACT_APP_BASE_URL;
// console.log(baseURL)

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 1000,
});

export default instance;
