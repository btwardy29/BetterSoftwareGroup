import styled from "styled-components";
import ReactPlayer from "react-player";

export const PlayerContainer = styled.div`
  height: auto;
  width: auto;
  -webkit-box-shadow: 0px 0px 35px -5px rgba(46, 196, 182, 1);
  -moz-box-shadow: 0px 0px 35px -5px rgba(46, 196, 182, 1);
  box-shadow: 0px 0px 35px -5px rgba(46, 196, 182, 1);
`;

export const ErrorContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  @media (max-width: 860px) {
    margin: 10px;
  }
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
    color: #2ec4b6;
    background-color: #fdfffc;
    cursor: pointer;
    border-radius: 3px;
  }
`;
