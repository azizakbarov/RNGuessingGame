import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#640233" }}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonOuterContainer, styles.pressed]
          : styles.buttonOuterContainer
      }
    >
      <View style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#ddb52f",
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
