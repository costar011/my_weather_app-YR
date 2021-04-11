import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Location from "expo-location";
import { getCurrentDate } from "../src/commonUtil";
import { LinearGradient } from "expo-linear-gradient";
import TypeWriter from "react-native-typewriter";

const WEATHER_API_KEY = "c2279690f1a92e1324cfa1a79d5584ed";

const TodayScreen = () => {
  const [location_S, setLocation_S] = useState(null);
  const [errMsg_S, setErrMsg_S] = useState(``);

  const [viewDate, setViewDate] = useState(`0000. 00. 00 (0)`);
  const [viewTime, setviewTime] = useState(`00:00`);

  const [currentTemp, setCurrentTemp] = useState(`0`);
  const [currentCity, setCurrentCity] = useState(``);

  const [minTemp, setMinTemp] = useState(``);
  const [maxTemp, setMaxTemp] = useState(``);

  const [weatherStatus, setWeatherStatus] = useState(``);
  const [weatherImg, setWeatherImg] = useState(null);

  setInterval(() => {
    const { currentDate, currentTime } = getCurrentDate();

    setViewDate(currentDate);
    setviewTime(currentTime);
  }, 1000);

  return (
    <View style={styles.container}>
      <Text>error</Text>
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

export default TodayScreen;
