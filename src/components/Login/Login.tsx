import React, { FC } from "react";
import { LoginContainer, LoginForm } from "../../styles/Login.styles";
import { Card, Text } from "../../styles/Splash.styles";

const Login: FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <LoginContainer>
      <Card>
        <Text>Login</Text>
        <LoginForm onSubmit={handleSubmit}>
          <label>Login</label>
          <input name="login"></input>
          <label>Password: </label>
          <input name="password"></input>
          <button type="submit">Login</button>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
};

export default Login;
