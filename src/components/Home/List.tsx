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

  return (
    <HomeElements>
      {props && props.data
        ? props.data.map((el) => {
            const playVideo = (e: any) => {
              let authToken = localStorage.getItem("authToken") as string;
              api
                .getTrialPlayInfo(JSON.parse(authToken), el.Id)
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
