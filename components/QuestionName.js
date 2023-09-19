import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function QuestionName() {
  const correct = useSelector((state) => state.correctCount.correct);
  return (
    <View style={questionNameStyles.container}>
      <View style={questionNameStyles.questionBox}>
        <Text style={questionNameStyles.text}>Вопрос: {correct}</Text>
      </View>
    </View>
  );
}
const questionNameStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    width: "100%",
    height: 60,
  },
  questionBox: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    height: 80,

    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "rgba(255, 255, 0, 0.5)",
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 1,
    boxShadowRadius: 0,
    elevation: 50,
  },
  text: {
    color: "red",
    fontSize: 28,
  },
});
