import React from 'react';
import { shape } from 'prop-types';
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from './Hero.styles';

function Hero({ movie }) {
  // console.log(movie);
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.title || movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;

Hero.propTypes = {
  movie: shape,
}.isRequired;
