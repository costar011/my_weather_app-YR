import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View styles={styles.container}>
      <Text>sssss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,

    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default App;
