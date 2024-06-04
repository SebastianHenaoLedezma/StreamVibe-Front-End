import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL
  /* baseURL: "http://54.232.45.246:8000/" */
})
