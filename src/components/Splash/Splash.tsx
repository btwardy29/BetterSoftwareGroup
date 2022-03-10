import React, { FC } from "react";
import { Route } from "react-router-dom";
import {
  Card,
  SplashContainer,
  Text,
  SplashButton,
  SplashLink,
} from "../../styles/Splash.styles";

const Splash: FC = () => {
  return (
    <SplashContainer>
      <Card>
        <Text>Do You have an account?</Text>
        <SplashLink to="/login">Login</SplashLink>
        <Text>Try free trial version</Text>
        <SplashButton>Start free</SplashButton>
      </Card>
    </SplashContainer>
  );
};

export default Splash;
