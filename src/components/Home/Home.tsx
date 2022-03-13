import React, { FC, useEffect, useState } from "react";
import api from "../../API";

import { StyledSpinner } from "../../styles/Spinner.styles";
import { HomeContainer } from "../../styles/Home.styles";
import List from "./List";

const Home: FC = () => {
  const [media, setMedia] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let authToken = localStorage.getItem("authToken") as string;
    api.getMedia(JSON.parse(authToken)).then((res) => {
      setMedia(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <HomeContainer>
      {isLoading ? (
        <StyledSpinner viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </StyledSpinner>
      ) : (
        <List data={media} />
      )}
    </HomeContainer>
  );
};

export default Home;
