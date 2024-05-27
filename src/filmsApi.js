import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTZhNjlmN2NhMTRhZjc2Nzg4YmViNDJkYWJhZDI2YSIsInN1YiI6IjY2NTM3OWQ4OTU0MmJiYjdiZWI2Mjc5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BeXgkgXe2ouzB704DLYG4TvkHN8eV004ThJN7XSrnp0';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: API_KEY,
    accept: 'application/json',
  },
});

export function api(page) {
  return axiosInstance.get(`/movie/popular?page=${page}`)
    .then(response => response.data.results)
    .catch(err => {
      throw err;
    });
}

export function getById(id) {
  return axiosInstance.get(`/movie/${id}`)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
      throw err;
    });
}

export function getByName(movieName) {
  return axiosInstance.get(`/search/movie?query=${movieName}`)
    .then(response => response.data.results)
    .catch(err => {
      console.log(err)
      throw err;
    });
}

export function getCast(id) {
  return axiosInstance.get(`/movie/${id}/casts`)
    .then(response => response)
    .catch(err => {
      console.log(err)
      throw err;
    });
}

export function getRewiews(id) {
  return axiosInstance.get(`/movie/${id}/reviews`)
    .then(response => response.data.results)
    .catch(err => {
      console.log(err)
      throw err;
    });
}



