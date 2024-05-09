import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ekledik

const RedQuiz = () => {
  const navigation = useNavigation(); // Navigation hook'unu ekledik

  const handleCategoryPress = (category) => {
    // İlgili kategoriye göre navigasyon işlemlerini yapacak fonksiyon
    navigation.navigate('Quiz', { category: category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Red Team Quiz Türleri</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF6347' }]}
          onPress={() => handleCategoryPress('web')} // Web kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Web</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#9932cc' }]}
          onPress={() => handleCategoryPress('mobile')} // Mobil kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Mobil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4682B4' }]}
          onPress={() => handleCategoryPress('network')} // Network kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Network</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#32CD32' }]}
          onPress={() => handleCategoryPress('cryptography')} // Kriptoloji kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Kriptoloji</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#8b8682' }]}
          onPress={() => handleCategoryPress('pentest')} // Pentest kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Pentest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ffa500' }]}
          onPress={() => handleCategoryPress('burpsuite')} // Burp Suite kategorisi için onPress düzenlendi
        >
          <Text style={styles.buttonText}>Burp Suite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default RedQuiz;
