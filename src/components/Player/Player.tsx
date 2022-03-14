import React, { FC } from "react";
import ReactPlayer from "react-player";
import { useStore } from "../../store";
import { PlayerContainer } from "../../styles/Player.styles";
import PlayerErrorHandler from "./PlayerErrorHandler";

const Player: FC = () => {
  const { currentUrl } = useStore();
  let acctualUrl = currentUrl;

  return (
    <>
      {currentUrl && acctualUrl ? (
        <PlayerContainer>
          <ReactPlayer url={`${acctualUrl}`} controls={true} />
        </PlayerContainer>
      ) : (
        <PlayerErrorHandler text="Sorry, we do not have access to this title at this time"></PlayerErrorHandler>
      )}
    </>
  );
};

export default Player;
