import React, { FC } from "react";
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
  const { register, handleSubmit, reset } = useForm<LoginForm>();

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    console.log(data);
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
            {...register("login")}
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
