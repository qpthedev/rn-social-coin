import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { history, info } from "../api";
import colors from "../colors";
import { Icon } from "../components/Coin";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.black_color};
`;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: symbol,
    });
  }, []);

  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );

  return <Container></Container>;
};

export default Detail;
