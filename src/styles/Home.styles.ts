import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(231, 29, 54);
  background: radial-gradient(
    circle,
    rgba(231, 29, 54, 0.711922268907563) 0%,
    rgba(1, 22, 39, 1) 100%
  );
`;

export const HomeElements = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const SingleElement = styled.div`
  height: 150px;
  width: 267px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fdfffc38;

  color: #011627;
  border: 1px solid #2ec4b647;

  &:hover {
    cursor: pointer;
  }
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  color: #fdfffc;
  font-weight: 600;
  margin: 10px;
`;
