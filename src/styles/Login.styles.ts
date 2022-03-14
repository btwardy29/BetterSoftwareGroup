import styled from "styled-components";

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    width: 95%;
  }
`;
export const LoginCard = styled.div`
  height: 50vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #fdfffc;
  border-radius: 10px;
  -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  @media (max-width: 1400px) {
    width: 60%;
  }
  @media (max-width: 860px) {
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
  width: 80%;
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
  width: 80%;
  height: 40px;
  margin-top: 2rem;
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
