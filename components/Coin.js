import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;
const CoinName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Coin = ({ id, symbol, index }) => {
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);

  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <Pressable
      style={{ flex: 0.31 }}
      onPress={() => navigation.navigate("Detail", { symbol, id })}
    >
      <Wrapper style={{ opacity, transform: [{ scale }] }}>
        <Icon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
        <CoinName>{symbol}</CoinName>
      </Wrapper>
    </Pressable>
  );
};

export default Coin;
