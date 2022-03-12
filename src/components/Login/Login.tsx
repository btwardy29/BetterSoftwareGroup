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
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const [user, setUser] = useState<UserData>({});
  const [auth, setAuth] = useState<AuthData>({});

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    api
      .userLogin(data)
      .then((res) => {
        setUser(res.data.User);
        setAuth(res.data.AuthorizationToken);
      })
      .catch((err) => console.log(err));

    e?.target.reset();
    console.log(auth.Token);
    api.getMedia(auth.Token);
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
