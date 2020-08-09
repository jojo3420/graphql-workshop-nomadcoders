import React from 'react';
import styled from 'styled-components';

const ErrorBlock = styled.div`
  min-width: 20rem;
  background-color: red;
`;


function Error({ error }) {
  if (!error) return;

  return (
    <ErrorBlock>{error.toString()}</ErrorBlock>
  );
}

export default Error;
