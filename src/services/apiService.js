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

export const getMovieRandom = async () => {
  try {
    const response = await axios.get('/movies-random/');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getMoviesNewReleases = async () => {
  try {
    const response = await axios.get('/movies-new-releases/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesMustWatch = async () => {
  try {
    const response = await axios.get('/movies-must-watch/');
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
    const response = await axios.post('/users-create/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/users-login/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await axios.post('/reviews-create/', reviewData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReview = async (reviewId, reviewData) => {
  try {
    const response = await axios.put(`/reviews-update/${reviewId}/`, reviewData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const response = await axios.delete(`/reviews-delete/${reviewId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
