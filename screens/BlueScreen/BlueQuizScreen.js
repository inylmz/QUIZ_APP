<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import questions from '../../data/questions'; // RedQuestions veri dosyasını burada dahil edin
import { useNavigation } from '@react-navigation/native'; // useNavigation ekleyin

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const navigation = useNavigation(); // navigation ekleyin

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;
    setAnswers([...answers, { question: currentQuestionIndex + 1, answer: isCorrect }]);
    if (isCorrect) {
      setPoints(points + 10);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      navigation.navigate('Results', { 
        answers: answers,
        points: points,
      });
      // Quiz bitince state'leri sıfırla
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setAnswers([]);
      setPoints(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentQuestionIndex + 1}/{questions.length} Cevaplanan Sorular
        </Text>
        <View style={styles.progressBar}>
          <View
            style={{
              backgroundColor: '#FFC0CB',
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              height: 10,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <Pressable
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswerIndex === index && styles.selectedOption,
                  selectedAnswerIndex !== null &&
                    index === currentQuestion.correctAnswerIndex &&
                    styles.correctOption,
                ]}
                onPress={() => handleAnswer(index)}
              >
                <Text style={styles.optionText}>{option.answer}</Text>
                {selectedAnswerIndex === index && (
                  <AntDesign
                    name={index === currentQuestion.correctAnswerIndex ? 'check' : 'closecircle'}
                    size={24}
                    color="white"
                  />
                )}
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleNextQuestion}>
            <Text style={styles.buttonText}>
              {currentQuestionIndex + 1 === questions.length ? 'Bitti' : 'Sonraki Soru'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <Text style={styles.pointsText}>Puan: {points}</Text>
=======
import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const QuizScreen = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
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
  console.log(answerStatus)

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        
        <Text>
          ({index}/{totalQuestions}) Cevaplanan Sorular
        </Text>
      </View>

      {/* Progress Bar */}
      <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            justifyContent: "center",
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

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
            index === currentQuestion.correctAnswerIndex ? (
              <AntDesign
              style={{
                borderColor: "#00FFFF",
                textAlign: "center",
                borderWidth: 0.5,
                width: 40,
                height: 40,
                borderRadius: 20,
                padding: 10,
              }}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Doğru Cevap" : "Yanlış Cevap"}
          </Text>
        )}

        {index + 1 >= questions.length ? (
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
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
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
        )}
      </View>
>>>>>>> 7dca240 (Yeni screenler eklendi)
    </SafeAreaView>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  progressContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  pointsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionContainer: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  optionsContainer: {
    flexDirection: 'column',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  optionText: {
    flex: 1,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  correctOption: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
=======
export default QuizScreen;

const styles = StyleSheet.create({});
>>>>>>> 7dca240 (Yeni screenler eklendi)
