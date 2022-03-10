import styled from "styled-components";

export const SplashContainer = styled.div`
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

export const Card = styled.div`
  height: 50%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfffc;
  border-radius: 10px;
  -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
`;

export const Text = styled.p`
  color: #011627;
  font-size: 2rem;
`;

export const LoginButton = styled.button`
  height: 30px;
  width: 40%;
  background-color: #011627;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fdfffc;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff9f1c;
    -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  }
`;

export const TrialButton = styled.button`
  height: 30px;
  width: 40%;
  background-color: #2ec4b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #011627;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  }
`;
