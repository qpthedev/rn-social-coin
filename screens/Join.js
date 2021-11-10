import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";

const Container = styled.View`
  background-color: ${colors.black_color};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Btn = styled.Pressable`
  width: 100%;
  padding: 10px 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInput = useRef();

  const onSubmitEditing = () => {
    passwordInput.current.focus();
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
    </Container>
  );
};

export default Join;
