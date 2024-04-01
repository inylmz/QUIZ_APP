import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native';

const ResultsScreen = ({ route, navigation }) => {
  const { points } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>SKOR</Text>
        <Text style={styles.pointsText}>{points} Puan</Text>

        <Image
          source={require('../assets/result.png')} // Resminizin yolunu doğru şekilde belirtin
          style={styles.image}
        />

      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Bitti</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 90,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointsText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'darkgreen',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultsScreen;
