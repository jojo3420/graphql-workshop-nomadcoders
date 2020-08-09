import React from 'react';
import styled from "styled-components";

const LoadingBlock = styled.div`
  background-color: green;
  text-align: center;
  font-weight: bold;
`;

function Loading({ loading }) {
  return (
    <LoadingBlock>
      {loading && 'Loading...'}
    </LoadingBlock>
  );
}

export default Loading;
