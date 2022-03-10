import React, { FC } from "react";
import {
  Card,
  SplashContainer,
  Text,
  LoginButton,
  TrialButton,
} from "../../styles/Splash.styles";

const Splash: FC = () => {
  return (
    <SplashContainer>
      <Card>
        <Text>Did You have account?</Text>
        <LoginButton>Login</LoginButton>
        <Text>You can try free trial version</Text>
        <TrialButton>Start free</TrialButton>
      </Card>
    </SplashContainer>
  );
};

export default Splash;
