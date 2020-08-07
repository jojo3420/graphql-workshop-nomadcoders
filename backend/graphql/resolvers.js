const { people, animals, movies,
  getPersonById, getAnimalById, getMovieById, createMovie,
  modifyMovie, removeMovieById,
  getMoviesX, getMovieByIdX,
} = require('./db');


/**
 * resolvers
 *   해결 하는 역활( =컨트롤러 )
 *  핵심 키 포인트는 스키마 정의한 Query 의 이름과 resolvers 멤버 이름이 매칭 되어야 한다!
 *
 * @type {{Query: {movies: (function(): [{score: number, author: string, id: number, title: string}, {score: number, author: string, id: number, title: string}, {score: number, author: string, id: number, title: string}, {score: number, author: string, id: number, title: string}]), getPerson: (function(*, *): {gender: string, name: string, id: number, age: number} | {gender: string, name: string, id: number, age: number} | {gender: string, name: string, id: number, age: number} | {gender: string, name: string, id: number, age: number}), greeting: (function(): string), animals: (function(): [{gender: boolean, name: string, weight: number, id: number}, {gender: boolean, name: string, weight: number, id: number}, {gender: boolean, name: string, weight: number, id: number}]), getMovie: (function(*, {id?: *}): {score: number, author: string, id: number, title: string}|{score: number, author: string, id: number, title: string}|{score: number, author: string, id: number, title: string}|{score: number, author: string, id: number, title: string}), people: (function(): [{gender: string, name: string, id: number, age: number}, {gender: string, name: string, id: number, age: number}, {gender: string, name: string, id: number, age: number}, {gender: string, name: string, id: number, age: number}]), getAnimal: (function(*, {id?: *}): {gender: boolean, name: string, weight: number, id: number}|{gender: boolean, name: string, weight: number, id: number}|{gender: boolean, name: string, weight: number, id: number})}}}
 */
const resolvers = {
  Query: {
    greeting: () => 'Hello world!',

    people: () => people,
    getPerson: (_, args) => {
      // console.log({ args });
      const { id } = args;
      return getPersonById(id);
    },

    animals: () => animals,
    getAnimal: (_, { id }) => getAnimalById(id),

    movies: () => movies,
    getMovie: (_, { id }) => getMovieById(id),

    // 외부 api wrapper
    moviesX:  (_, { limit, rating })  => getMoviesX(limit, rating),
    getMovieX: (_, { id }) => {
      const movie = getMovieByIdX(id);
      return movie;
    },
  },
  Mutation: {
    addMovie: (_, {title, author, score}) => {
      return createMovie({title, author, score});
    },
    replaceMovie: (_, { id, title, author, score }) => {
      return modifyMovie({ id, title, author, score });
    },
    removeMovie: (_, { id }) => {
      return removeMovieById(id);
    },

  }
}



module.exports = resolvers;
