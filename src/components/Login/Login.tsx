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

interface UserData {
  Username?: string;
  Password?: string;
  Device?: {
    Name: string;
    PlatformCode: string;
    FirebaseToken: string;
    DpiCode: string;
  };
}

interface AuthData {
  Token?: string;
  TokenExpires?: string;
  RefreshToken?: string;
}

interface LoginForm {
  userName: string;
  password: string;
}

const Login: FC = () => {
  const [err, setErr] = useState();
  const { register, handleSubmit, reset } = useForm<LoginForm>();

  const { setAuth, setAuthData, setUser } = useStore();

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    api
      .userLogin(data)
      .then((res) => {
        setUser(res.data.User);
        setAuthData(res.data.AuthorizationToken);
        setAuth(true);
      })
      .catch((err) => {
        err ? setAuth(false) : console.log(err);
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
