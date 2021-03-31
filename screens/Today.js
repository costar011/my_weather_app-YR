import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.test}>
      <Text>today</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default App;
