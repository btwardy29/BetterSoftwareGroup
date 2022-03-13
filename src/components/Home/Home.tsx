import React, { FC, useEffect, useState } from "react";
import api from "../../API";

import { StyledSpinner } from "../../styles/Spinner.styles";
import { HomeContainer, HomeElements } from "../../styles/Home.styles";
const Home: FC = () => {
  const [media, setMedia] = useState([]);
  const [token, setToken] = useState<any>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
    console.log("first", token);
    api.getMedia(JSON.stringify(token)).then((res) => {
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
        <h1>hello</h1>
      )}
    </HomeContainer>
  );
};

export default Home;
