import axios from './axiosConfig';

export const faqs = async () => {
    try {
      const response = await axios.get('/faqs');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getUsers = async () => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// Puedes agregar más funciones para otros endpoints según sea necesario
