import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../cyber.png')} // Siber güvenlik temalı arka plan görüntüsü
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
      <Pressable
      onPress={() => navigation.navigate("Red")}
        style={{
          backgroundColor: "red",
          padding: 14,
          width:150,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Red Team</Text>
      </Pressable>
      <Pressable
      onPress={() => navigation.navigate("Blue")}
        style={{
          backgroundColor: "blue",
          padding: 14,
          width:150,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Blue Team</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 15,
    backgroundColor: '#FF4500', // Varsayılan arka plan rengi
    borderWidth: 2, // Kenarlık eklenerek butonu daha belirgin hale getir
    borderColor: '#FFF', // Kenarlık rengi
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default HomeScreen;
