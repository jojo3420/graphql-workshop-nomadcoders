const fetch = require('node-fetch');
const axios = require('axios');

const people = [
  {
    id: 1,
    name: 'Park jihoon',
    age: 20,
    gender: 'male',
  },
  {
    id: 2,
    name: 'jojo',
    age: 12,
    gender: 'female',
  },
  {
    id: 3,
    name: 'nari',
    age: 30,
    gender: 'female',
  },
  {
    id: 4,
    name: 'spring',
    age: 4,
    gender: 'male',
  }
];

const getPersonById = id => {
  const person = people.find(person => parseInt(person.id, 10) === parseInt(id, 10));
  return person;
}

const animals = [
  {id: 1, name: 'bob', weight: 12.1, gender: true},
  {id: 2, name: 'joy', weight: 33.1, gender: false},
  {id: 3, name: 'jam', weight: 43.1, gender: false},
];


const getAnimalById = id => {
  return animals.filter(animal => animal.id === parseInt(id, 10))[0]
}

let movieId = 5;
const movies = [
  {id: 1, title: '겨울 왕국', author: '디즈니', score: 4.4},
  {id: 2, title: '프렌즈', author: 'HBO', score: 4.2},
  {id: 3, title: '끝까지 간다', author: '?', score: 4.1},
  {id: 4, title: '마인드 헌터', author: '넥플릭스', score: 4.0},
];


const getMovieById = id => {
  const index = movies.findIndex(movie => movie.id === parseInt(id, 10));
  return movies[index];
}

// movie : { title, author, score}
const createMovie = (movie) => {
  movie.id = movieId++;
  movies.push(movie);
  return movie;
};

const modifyMovie = ({id, title, author, score}) => {
  const index = movies.findIndex(movie => movie.id === parseInt(id, 10));
  if (index > -1) {
    movies[index] = {...movies[index], title, author, score};
    return movies[index];
  }
  return false;
};

const removeMovieById = id => {
  const index = movies.findIndex(movie => movie.id === parseInt(id, 10));
  if (index > -1) {
    return movies.splice(index, 1);
  }
  return false;
}

/*
* 외부 API를 graphQL 로 wrapping!
  movie api 제공: https://yts.mx/api
* */

const API_URL = `https://yts.mx/api/v2`;
const getMoviesX = (limit = 10, rating = 1.0) => {
  const url = `${API_URL}/list_movies.json?limit=${limit}&minimum_rating=${rating}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => json.data.movies);
}

const getMovieByIdX = async (id) => {
  const url = `${API_URL}/movie_details.json?movie_id=${id}`;

  // node-fetch 이용 하여 fetch
  // const response = await fetch(url);
  // const json = await response.json();
  // return json.data.movie;

  // axios 이용
  const response =  await axios.get(url);
  // console.log({ response })
  const movie = response.data.data.movie;
  return movie;


}


module.exports = {
  people,
  animals,
  movies,
  getPersonById,
  getAnimalById,
  getMovieById,
  createMovie,
  modifyMovie,
  removeMovieById,
  getMoviesX,
  getMovieByIdX,
}
