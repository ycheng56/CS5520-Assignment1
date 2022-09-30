import { StyleSheet, View, Text, Button, Image } from "react-native";
import React from "react";
import { styles, color } from "../styles/helper";

function Picture(props) {
  if (props.answer == null) {
    return (
      <Image
        source={require("../assets/face.png")}
        style={{ width: 100, height: 100 }}
      />
    );
  } else {
    const uri = { uri: `https://picsum.photos/id/${props.answer}/100/100` };
    return <Image source={uri} style={{ width: 100, height: 100 }} />;
  }
}
export default function FinalCard({ answer, startNewGame }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Here's your picture</Text>
        <Picture answer={answer}/>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Start Again"
              color={color.main}
              onPress={() => {
                startNewGame();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
