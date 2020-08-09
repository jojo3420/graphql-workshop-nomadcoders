import React from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import {gql, useMutation} from '@apollo/client';

const MovieItemBlock = styled(Link)`
  text-decoration: none;
  color: black;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  } 
  h4 {
   
  } 
  p {
  
  }
`

const StyledButton = styled.button`
 display: block;
 min-width: 10rem;
 background: red;
 color: white;
 padding: 0.5rem 0.5rem;
 margin: 0.5rem 0.4rem;
 border: 1px solid yellow;
 text-height: 1rem;
 &:hover {
  background: orange;
 }
`

const LIKE_MOVIE = gql`
    mutation ToggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked:  $isLiked) @client
    }

`;


function MovieItem({movie}) {
  const {id, title, medium_cover_image, isLiked} = movie;
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: {
      id: parseInt(id, 10),
      isLiked: isLiked
    }
  });


  return (
    <>
      <MovieItemBlock to={`/${id}`}>
        <h2>{title}</h2>
        <img src={medium_cover_image} alt={`${title} poster`}/>
      </MovieItemBlock>
      <StyledButton
        onClick={likeMovie}
      >
        {isLiked ? 'unLike' : 'Like'}</StyledButton>
    </>
  );
}

export default MovieItem;
