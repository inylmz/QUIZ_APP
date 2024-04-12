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
    </SafeAreaView>
  );
};

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
