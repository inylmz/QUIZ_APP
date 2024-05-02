import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Import quiz data
import { webAttacksQuiz, networkAttacksQuiz, penetrationTesterQuiz } from '../../data/redQuestions';

const RedQuizTypeScreen = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [quizInProgress, setQuizInProgress] = useState(false);

  const handleQuizSelection = (quizType) => {
    setSelectedQuiz(quizType);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setAnswers([]);
    setPoints(0);
    setQuizInProgress(true);
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    const isCorrect = answerIndex === getCurrentQuestion().correctAnswerIndex;
    setAnswers([...answers, { question: currentQuestionIndex + 1, answer: isCorrect }]);
    if (isCorrect) {
      setPoints(points + 10);
    }
  };

  const getCurrentQuestion = () => {
    if (selectedQuiz === 'webAttacks') {
      return webAttacksQuiz[currentQuestionIndex];
    } else if (selectedQuiz === 'networkAttacks') {
      return networkAttacksQuiz[currentQuestionIndex];
    } else if (selectedQuiz === 'penetrationTester') {
      return penetrationTesterQuiz[currentQuestionIndex];
    }
    return null;
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < getCurrentQuiz().length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      // Handle quiz completion
      setQuizInProgress(false);
    }
  };

  const getCurrentQuiz = () => {
    if (selectedQuiz === 'webAttacks') {
      return webAttacksQuiz;
    } else if (selectedQuiz === 'networkAttacks') {
      return networkAttacksQuiz;
    } else if (selectedQuiz === 'penetrationTester') {
      return penetrationTesterQuiz;
    }
    return [];
  };

  const renderQuizQuestions = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return null;

    return (
      <View>
        <Text>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            title={option.answer}
            onPress={() => handleAnswer(index)}
          />
        ))}
        <Button
          title={currentQuestionIndex + 1 === getCurrentQuiz().length ? 'Finish' : 'Next Question'}
          onPress={handleNextQuestion}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>This is the Red Quiz Type Screen</Text>
      <Button title="Web Attacks Quiz" onPress={() => handleQuizSelection('webAttacks')} />
      <Button title="Network Attacks Quiz" onPress={() => handleQuizSelection('networkAttacks')} />
      <Button title="Penetration Tester Quiz" onPress={() => handleQuizSelection('penetrationTester')} />

      {/* Render selected quiz questions if quiz is in progress */}
      {quizInProgress && renderQuizQuestions()}
    </View>
  );
};

export default RedQuizTypeScreen;
