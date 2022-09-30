import { StyleSheet, View, Text, Button, Modal } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {styles, color} from "../styles/helper"

function Title(props) {
  if (props.guess == props.answer) {
    return <Text style={styles.cardTitle}>Contrats! You won!</Text>;
  }
  const hint = props.answer > props.guess ? "higher" : "lower";
  return (
    <Text style={styles.cardTitle}>
      <Text>
        You've choose {props.guess}
        {"\n"}
      </Text>
      <Text>That's not my number!{"\n"}</Text>
      <Text>Guess {hint}!</Text>
    </Text>
  );
}

function Select(props) {
  if (props.guess != props.answer) {
    return (
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <Button
            title="I'am Done"
            color={color.sub}
            onPress={() => {
              props.setGameOver(true);
              props.setModal(false);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Let me guess again!"
            color={color.main}
            onPress={() => {
              props.setModal(false);
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <Button
            title="Thank You!"
            color={color.main}
            onPress={() => {
              props.setModal(false);
              props.setGameOver(true);
            }}
          />
        </View>
      </View>
    );
  }
}

export default function Result({
  guess,
  answer,
  modal,
  setModal,
  setGameOver,
}) {
  return (
    <Modal visible={modal}>
      <LinearGradient colors={color.gradient} style={[styles.container,stylesheet.container]}>
        <View style={styles.card}>
          <Title guess={guess} answer={answer} />
          <Select
            guess={guess}
            answer={answer}
            setModal={setModal}
            setGameOver={setGameOver}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
