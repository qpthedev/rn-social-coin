import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import colors from "../colors";
import Detail from "../screens/Detail";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

const InNav = () => (
  <Nav.Navigator
    screenOptions={{
      presentation: "modal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.black_color,
      },
    }}
  >
    <Nav.Screen name="Coins" component={Home} />
    <Nav.Screen name="Detail" component={Detail} />
  </Nav.Navigator>
);

export default InNav;
