import React from 'react';
import {gql} from "apollo-boost";
import Loading from "components/common/Loading";
import MovieList from "components/movie/MovieList";
import {useQuery} from "@apollo/react-hooks";
import styled from "styled-components";


const GET_MOVIES = gql`
    {
        moviesX(limit: 10, rating: 9) {
            id
            title
            medium_cover_image
            isLiked @client   # client side property
        }
    }
`;


function Home({}) {
  const {loading, error, data } = useQuery(GET_MOVIES);
  return (
    <>
    <Title>
      Movie App with react, graphql
      <br />
      <span>I Love apollo</span>
    </Title>
    <HomeBlock>
      {loading && <Loading loading={loading}/>}
      {error && (<div>{error}</div>)}
      {data && data.moviesX && <MovieList movies={data.moviesX}/>}
     </HomeBlock>
    </>
  );
}

const Title = styled.h1`
  height: 20rem;
  background: green;
  color: white;
  text-align: center;
  line-height: 20rem;
  font-size: 3rem;
  span {
  
  }
`;

const HomeBlock = styled.div`
  
`;

export default Home;
