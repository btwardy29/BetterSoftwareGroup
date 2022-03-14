import styled from "styled-components";

export const HomeElements = styled.div`
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
  justify-content: flex-end;

  background-color: #fdfffc38;

  color: #fdfffc;
  border: 1px solid #2ec4b647;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #2ec4b6;
    transform: scale(1.1);
    margin: 15px;
    -webkit-box-shadow: 0px 0px 23px -11px rgba(46, 196, 182, 1);
    -moz-box-shadow: 0px 0px 23px -11px rgba(46, 196, 182, 1);
    box-shadow: 0px 0px 23px -11px rgba(46, 196, 182, 1);
  }
`;

export const CardText = styled.p`
  flex-wrap: wrap;
  font-size: 1.3rem;

  font-weight: 600;
  margin: 10px;
`;
