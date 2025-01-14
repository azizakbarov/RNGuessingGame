import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "../screens/GameScreen";

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState(null);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
