import React, { FC, useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from "../../styles/Login.styles";
import { Card } from "../../styles/Splash.styles";
import { useForm } from "react-hook-form";

interface LoginForm {
  login: string;
  password: string;
}

const Login: FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    login: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <LoginContainer>
      <Card>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLabel>Login</LoginLabel>
          <LoginInput type="email" name="login"></LoginInput>
          <LoginLabel>Password </LoginLabel>
          <LoginInput type="password" name="password"></LoginInput>
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
};

export default Login;
