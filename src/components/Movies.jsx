import React from 'react';
import { string, arrayOf } from 'prop-types';
import {
  MoviesContainer,
  MoviesPoster,
  MoviesRow,
  MoviesTitle,
} from './Movies.styles';

function Movies({ title, movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => (
          <MoviesPoster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;

Movies.propTypes = {
  title: string,
  movies: arrayOf,
}.isRequired;
