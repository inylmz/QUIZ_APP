import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { webAttacksQuiz, networkAttacksQuiz, mobilAttacksQuiz, kriptolojiQuiz, pentestQuiz, burpSuiteQuiz } from '../../data/redQuestions';

const QuizScreen = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;
  const [questions, setQuestions] = useState([]);

  switch (category) {
    case 'Web':
      questions = webAttacksQuiz;
      break;
    case 'Network':
      questions = networkAttacksQuiz;
      break;
    case 'Mobile':
      questions = mobilAttacksQuiz;
      break;
    case 'Cryptology':
      questions = kriptolojiQuiz;
      break;
    case 'Pentest':
      questions = pentestQuiz;
      break;
    case 'Burp Suite':
      questions = burpSuiteQuiz;
      break;
    default:
      break;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
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
    if (questions.length > 0 && currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      navigation.navigate('Results', { 
        answers: answers,
        points: points,
      });
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setAnswers([]);
      setPoints(0);
    }
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Sorular yüklenemedi. Lütfen daha sonra tekrar deneyin.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            title={option.answer}
            onPress={() => handleAnswer(index)}
          />
        ))}
      </View>
      <Button
        title={currentQuestionIndex + 1 === questions.length ? 'Finish' : 'Next Question'}
        onPress={handleNextQuestion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default QuizScreen;
