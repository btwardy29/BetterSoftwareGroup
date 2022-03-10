import React, { FC, useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from "../../styles/Login.styles";
import { Card, Text } from "../../styles/Splash.styles";
import { useForm } from "react-hook-form";

interface LoginForm {
  login: string;
  password: string;
}

const Login: FC = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <LoginContainer>
      <Card>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginLabel>Login</LoginLabel>
          <LoginInput type="email" {...register("login")} required></LoginInput>
          <LoginLabel>Password </LoginLabel>
          <LoginInput
            type="password"
            {...register("password")}
            required
          ></LoginInput>
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
};

export default Login;
