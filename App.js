import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Header from "./components/Header";
import InputCard from "./components/InputCard";
import Result from "./components/Result";
import FinalCard from "./components/FinalCard";
import {color} from "./styles/helper"

const generateRandomNumber = () => {
  const min = 1020;
  const max = 1029;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export default function App() {
  const [answer, setAnswer] = useState(generateRandomNumber());
  const [guess, setGuess] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resultShow = (boolean) => {
    if (boolean) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const gameEnd = (boolean) => {
    if (boolean) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  };

  const startNewGame = () => {
    setAnswer(generateRandomNumber());
    setGuess(null);
    setModalVisible(false);
    setGameOver(false);
  };

  function Card(props) {
    if (!props.gameOver) {
      return (
        <InputCard
          answer={answer}
          onResultAdd={resultShow}
          setGuess={setGuess}
        />
      );
    } else {
      return (
        <FinalCard
          answer={answer}
          startNewGame={startNewGame}
        />
      );
    }
  }

  return (
    <LinearGradient colors={color.gradient} style={styles.container}>
      
      <SafeAreaView style={styles.header}>
        <Header isGameOver={gameOver} />
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Card gameOver={gameOver} />
        <Result
          answer={answer}
          guess={guess}
          modal={modalVisible}
          setModal={resultShow}
          setGameOver={gameEnd}
          setAnswer={(newAnswer)=>{setAnswer(newAnswer)}}
        />
      </SafeAreaView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
