import { StyleSheet, View, Text, Button, Image } from "react-native";
import React from "react";
import {styles, color} from "../styles/helper"

export default function FinalCard({answer, startNewGame}) {

  const uri = {uri: `https://picsum.photos/id/${answer}/100/100`}
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Here's your picture</Text>
        <Image 
        source={uri}
        style={{width:100, height:100}} />
        
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Start Again"
              color= {color.main}
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