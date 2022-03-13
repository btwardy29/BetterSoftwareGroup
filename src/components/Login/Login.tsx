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
import api from "../../API";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  userName: string;
  password: string;
}

const Login: FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginForm>();

  const { setUser } = useStore();

  let navigate = useNavigate();

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    api
      .userLogin(data)
      .then((res) => {
        setUser(res.data.User);
        localStorage.setItem(
          "authToken",
          JSON.stringify(res.data.AuthorizationToken.Token)
        );
        localStorage.setItem("isAuth", JSON.stringify(true));
        navigate("/home");
      })
      .catch((err) => {
        err
          ? localStorage.setItem("isAuth", JSON.stringify(false))
          : console.log(err);
      });

    e?.target.reset();
  });

  return (
    <LoginContainer>
      <Card>
        <LoginForm onSubmit={onSubmit}>
          <LoginLabel htmlFor="login">Login</LoginLabel>
          <LoginInput
            id="login"
            type="email"
            {...register("userName")}
            required
          ></LoginInput>
          <LoginLabel htmlFor="password">Password </LoginLabel>
          <LoginInput
            id="password"
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
