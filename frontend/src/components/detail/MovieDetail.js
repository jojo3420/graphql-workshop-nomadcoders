import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import styled from 'styled-components';

const GET_MOVIE = gql`
    query getMovieX($id: Int!) {
        getMovieX (id: $id) {
            id
            title
            rating
            summary
            language,
            medium_cover_image
            isLiked @client
        }
        greeting
    }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 10rem;
  text-align: center;
  line-height: 1rem;
  text-size: 1rem;
  background: green;
`;

function MovieDetail() {
  const { id } = useParams();
  const {loading, error, data} = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id, 10)}
  });
  // console.log({data});
  if (loading) return <Loading loading={loading}/>;
  if (error) return <Error error={error} />

  const {title, rating, summary, language, medium_cover_image, isLiked} = data.getMovieX;
  // console.log({ isLiked })

  const titleEl = document.querySelector('title');
  titleEl.innerText =  title || data.greeting ;

  return (
    <div>
      <h2>{title} {isLiked ? '😃' : '😠'}</h2>
      <div>{rating}</div>
      <p>summary: {summary}</p>
      <p>language: {language}</p>
      <img src={medium_cover_image} alt="poster"/>
      <StyledLink to="/">Home</StyledLink>
    </div>
  );
}

export default MovieDetail;
