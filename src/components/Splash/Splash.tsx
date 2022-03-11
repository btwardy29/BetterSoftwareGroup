import React, { FC, useState } from "react";
import {
  Card,
  SplashContainer,
  Text,
  SplashButton,
  SplashLink,
} from "../../styles/Splash.styles";
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

const Splash: FC = () => {
  const [user, setUser] = useState<UserData>({});
  const [auth, setAuth] = useState<AuthData>({});
  const handleClick = () => {
    api.trialLogin().then((res) => {
      setUser(res.data.User);
      setAuth(res.data.AuthorizationToken);
    });
    console.log(auth, user);
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
