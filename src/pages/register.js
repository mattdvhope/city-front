import React from 'react';
import styled from "styled-components";
import TrainingSessions from "../components/TrainingSessions";

const MarginDiv = styled.div`
  margin-top: 49px;
  margin-bottom: -70px;
`

export default () => {
  return (
    <MarginDiv>
      <TrainingSessions />
    </MarginDiv>
  );
}