import {StyleSheet} from "react-native";

const color = {
    title: "#F0C105",
    main: "#DA356D",
    sub: "#BB8EDA",
    card: "#35071E",
    shadow: "#000",
    gradient: ["#CEEBF4", "#C287DE"],
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    card: {
      minWidth: '70%',
      padding: 10,
      backgroundColor: color.card,
      alignItems: "center",
      borderRadius: 10,
      shadowColor: color.shadow,
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    cardTitle: {
      color: color.title,
      fontSize: 20,
      textAlign: "center",
      marginBottom:10,
    },
    buttonGroup: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      alignItems: "center",
      minWidth: "20%",
      margin: 10,
    },
  });

export {styles, color};