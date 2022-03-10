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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
