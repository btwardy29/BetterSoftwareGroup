import styled from "styled-components";
import ReactPlayer from "react-player";

export const PlayeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #011627;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #e71d36;
`;

export const ErrorButton = styled.button`
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  transition: all 0.5s;
  color: #fff;
  &:hover {
    color: #011627;
    background-color: #e71d36;
    cursor: pointer;
    border-radius: 15px;
  }
`;
