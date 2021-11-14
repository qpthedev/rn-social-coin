import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from "victory-native";
import { history, info } from "../api";
import colors from "../colors";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.black_color};
  /* background-color: white; */
  justify-content: center;
  align-items: center;
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

  const [victoryData, setVictoryData] = useState(null);

  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  }, [historyData]);

  //   console.log(victoryData);

  return (
    <Container>
      {victoryData ? (
        <VictoryChart>
          <VictoryLine
            animate
            interpolation="cardinal"
            data={victoryData}
            style={{
              data: { stroke: "#1abc9c" },
            }}
          />
          <VictoryScatter
            data={victoryData}
            style={{
              data: { fill: "#1abc9c" },
            }}
          />
          <VictoryAxis
            label="Time"
            style={{
              axis: {
                stroke: "white",
              },
              tickLabels: {
                fill: "white",
                fontSize: 10,
              },
            }}
            tickCount={5}
            tickFormat={(tick) =>
              `${new Date(tick).getHours()}:${
                new Date(tick).getMinutes() < 10
                  ? "0" + new Date(tick).getMinutes()
                  : new Date(tick).getMinutes()
              }`
            }
          />
          <VictoryAxis
            dependentAxis
            label="USD"
            style={{
              axis: {
                stroke: "white",
              },
              tickLabels: {
                fill: "white",
                fontSize: 10,
              },
            }}
          />
        </VictoryChart>
      ) : (
        <ActivityIndicator color="white" size="large" />
      )}
    </Container>
  );
};

export default Detail;
