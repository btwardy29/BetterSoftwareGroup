import React, { FC } from "react";
import {
  ErrorContainer,
  ErrorText,
  ErrorButton,
} from "../../styles/Player.styles";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  text: string;
}

const PlayerErrorHandler: FC<ErrorProps> = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <ErrorContainer>
      <ErrorText>{props.text}</ErrorText>
      <ErrorButton onClick={handleBack}>Go back</ErrorButton>
    </ErrorContainer>
  );
};

export default PlayerErrorHandler;
