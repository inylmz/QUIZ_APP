import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import questions from "../../data/redQuestions"; // questions data import

const QuizScreen = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState(15);
  let interval = null;
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      const currentQuestion = data[index];
      const isCorrect = selectedAnswerIndex === currentQuestion?.correctAnswerIndex;

      setPoints((prevPoints) => (isCorrect ? prevPoints + 10 : prevPoints));
      setAnswerStatus(isCorrect);
      setAnswers([...answers, { question: index + 1, answer: isCorrect }]);
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1);
      }
      if (counter === 0) {
        setIndex((prevIndex) => prevIndex + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval);
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView>
      <View style={{ padding: 10, alignItems: "center" }}>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "magenta",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {counter}
          </Text>
        </Pressable>
      </View>

      <View style={{ alignItems: "center", marginHorizontal: 10 }}>
        <Text>({index + 1}/{totalQuestions}) Cevaplanan Sorular</Text>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#FFC0CB",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>

      <View style={{ marginTop: 30, backgroundColor: "#F0F8FF", padding: 10, borderRadius: 6 }}>
  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{currentQuestion?.question}</Text>
  <View style={{ marginTop: 12 }}>
    {currentQuestion?.options && currentQuestion.options.map((option, optionIndex) => (
      <Pressable
        key={optionIndex}
        onPress={() => setSelectedAnswerIndex(optionIndex)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#00FFFF",
          marginVertical: 10,
          borderRadius: 20,
          backgroundColor:
            selectedAnswerIndex === optionIndex
              ? index === currentQuestion.correctAnswerIndex
                ? "green"
                : "red"
              : "white",
          paddingVertical: 12,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: selectedAnswerIndex === optionIndex ? "white" : "#000",
            fontWeight: "bold",
          }}
        >
          {option}
        </Text>
      </Pressable>
    ))}
  </View>
</View>


      <View style={{ marginTop: 45, backgroundColor: "#F0F8FF", padding: 10, borderRadius: 7 }}>
        {answerStatus !== null && (
          <Text style={{ fontSize: 17, textAlign: "center", fontWeight: "bold" }}>
            {answerStatus ? "Doğru Cevap" : "Yanlış Cevap"}
          </Text>
        )}

        {index + 1 < totalQuestions ? (
          <Pressable
            onPress={() => setIndex((prevIndex) => prevIndex + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Sonraki Soru</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,
                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Bitti</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
