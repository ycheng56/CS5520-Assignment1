import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import {styles, color} from "../styles/helper"

const checkValue = (value, setGuess, onResultAdd) => {
  const number = parseFloat(value);
  if (! isNaN(number) && Number.isInteger(number) && number >= 1020 && number <= 1029) {
      setGuess(number);
      onResultAdd(true);
  }
  else {
    Alert.alert(
      "Invalid Number!",
      "Number has to be a integer between 1020 to 1029",
      [
        {
          text: "Okay",
          style: "destructive"
        }
      ]
    )
  }
};
export default function InputCard({onResultAdd,setGuess}) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
      <Text style={styles.cardTitle}>Enter a Number</Text>
      <TextInput
        style={stylesheet.textInput}
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
        keyboardType="number-pad"
      />
      <View style={[styles.buttonGroup,stylesheet.buttonGroup]}>
        <View style={styles.button}>
          <Button
            title="Confirm"
            // disabled={text ? false : true}
            color= {color.main}
            onPress={() => {
              checkValue(text, setGuess, onResultAdd);
              setText("");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Reset"
            color= {color.sub}
            onPress={() => {
              setText("");
            }}
          />
        </View>
      </View>

      </View>
      
    </View>
  );
}

const stylesheet = StyleSheet.create({
  textInput: {
    color: color.title,
    fontSize: 20,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: color.title,
    margin: 20,
  },
  buttonGroup: {
    flexDirection: "row-reverse",
  },
});
