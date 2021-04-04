import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Location from "expo-location";
import { getDate } from "../src/commonUtil";
import { LinearGradient } from "expo-linear-gradient";
import TypeWriter from "react-native-typewriter";

const Today = () => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default Today;
