import React, { FC } from "react";
import ReactPlayer from "react-player";
import { useStore } from "../../store";
import { PlayeContainer } from "../../styles/Player.styles";
import PlayerErrorHandler from "./PlayerErrorHandler";

const Player: FC = () => {
  const { currentUrl } = useStore();
  let acctualUrl = currentUrl;

  return (
    <PlayeContainer>
      {currentUrl && acctualUrl ? (
        <ReactPlayer
          width={1280}
          height={720}
          url={`${acctualUrl}`}
          controls={true}
        />
      ) : (
        <PlayerErrorHandler text="Sorry, we do not have access to this title at this time"></PlayerErrorHandler>
      )}
    </PlayeContainer>
  );
};

export default Player;
