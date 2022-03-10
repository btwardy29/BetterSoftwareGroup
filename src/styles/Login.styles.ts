import { screen } from "@testing-library/react";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100wv;
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

export const LoginForm = styled.form`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    width: 95%;
  }
`;

export const LoginLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 20px 0;
  color: #011627;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.3rem;
  margin: 5px;
  color: #011627;
  border: 1px solid #011627;
  border-radius: 5px;
  &:focus {
    outline: 2px solid #2ec4b6;
    border: none;
    -webkit-box-shadow: 2px 4px 5px 0px rgb(1 22 39);
    -moz-box-shadow: 2px 4px 5px 0px rgb(1 22 39);
    box-shadow: 2px 4px 5px 0px rgb(1 22 39);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  background-color: #011627;
  color: #fdfffc;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #ff9f1c;
    -webkit-box-shadow: 2px 4px 5px 0px rgb(1 22 39);
    -moz-box-shadow: 2px 4px 5px 0px rgb(1 22 39);
    box-shadow: 2px 4px 5px 0px rgb(1 22 39);
  }
`;
