import React, { FC } from "react";
import {
  Card,
  Text,
  SplashButton,
  SplashLink,
} from "../../styles/Splash.styles";
import api from "../../API";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

const Splash: FC = () => {
  const { setUser } = useStore();

  let navigate = useNavigate();

  const handleClick = () => {
    api
      .trialLogin()
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
  };

  return (
    <Card>
      <Text>Do You have an account?</Text>
      <SplashLink to="/login">Login</SplashLink>
      <Text>Try free trial version</Text>
      <SplashButton onClick={handleClick}>Start free</SplashButton>
    </Card>
  );
};

export default Splash;
