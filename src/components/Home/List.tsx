import React, { FC } from "react";
import { ListData } from "./ListDataTypes";
import {
  HomeElements,
  SingleElement,
  CardText,
} from "../../styles/Home.styles";
import api from "../../API";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

const List: FC<ListData> = (props) => {
  const { setCurrentUrl } = useStore();
  const navigate = useNavigate();

  const playVideo = () => {
    let authToken = localStorage.getItem("authToken") as string;
    api
      .getTrialPlayInfo(JSON.parse(authToken))
      .then((res) => {
        console.log(res);
        setCurrentUrl(res.data.ContentUrl);
        navigate("/player");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HomeElements>
      {props && props.data
        ? props.data.map((el) => {
            return (
              <SingleElement key={el.Id} onClick={playVideo}>
                <CardText>{el.Title}</CardText>
              </SingleElement>
            );
          })
        : null}
    </HomeElements>
  );
};

export default List;
