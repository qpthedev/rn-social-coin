import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import InNav from "./navigators/InNav";
import OutNav from "./navigators/OutNav";
import { QueryClient, QueryClientProvider } from "react-query";
import { LogBox } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  console.ignoredYellowBox = ["Setting a timer"];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer"]);
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLoggedIn ? <InNav /> : <OutNav />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
