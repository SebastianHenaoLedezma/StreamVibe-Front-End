import axios from './axiosConfig';

export const getFaqs = async () => {
  try {
    const response = await axios.get('/faqs/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get('/genres/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByGenreId = async (genreId) => {
  try {
    const response = await axios.get(`/genres/${genreId}`);
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/users/create/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/users/login/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await axios.post('/reviews/', reviewData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
