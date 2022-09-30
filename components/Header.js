import { StyleSheet, View, Text} from "react-native";
import React from "react";
import {color} from "../styles/helper"

function Greeting(props) {
  if (props.isGameOver) {
    return <Text>Game Is Over</Text>;
  }
  return <Text>Guess My Number</Text>;
}

export default function Header({ isGameOver }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        <Greeting isGameOver={isGameOver} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderWidth: 2,
    borderColor: color.main,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: color.main,
    fontSize: 20,
  },
});
