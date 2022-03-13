import React, { FC, useState } from "react";
import {
  Card,
  SplashContainer,
  Text,
  SplashButton,
  SplashLink,
} from "../../styles/Splash.styles";
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

const Splash: FC = () => {
  const { setAuth, isAuth, getAuth, setAuthData, setUser } = useStore();

  const handleClick = () => {
    api
      .trialLogin()
      .then((res) => {
        setUser(res.data.User);
        setAuthData(res.data.AuthorizationToken);
        setAuth(true);

        // console.log("getAuth: ", getAuth());
        // console.log("isAuth: ", isAuth);
      })
      .catch((err) => {
        err ? setAuth(false) : console.log(err);
      });
  };

  return (
    <SplashContainer>
      <Card>
        <Text>Do You have an account?</Text>
        <SplashLink to="/login">Login</SplashLink>
        <Text>Try free trial version</Text>
        <SplashButton onClick={handleClick}>Start free</SplashButton>
      </Card>
    </SplashContainer>
  );
};

export default Splash;
