import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TodayScreen from "./screens/Today";

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Today" component={TodayScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
