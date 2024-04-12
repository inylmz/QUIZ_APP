import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import RedHomeScreen from './screens/RedScreen/RedHomeScreen';
import RedQuizScreen from './screens/RedScreen/RedQuizScreen';
import BlueHomeScreen from './screens/BlueScreen/BlueHomeScreen';
import BlueQuizScreen from './screens/BlueScreen/BlueQuizScreen';
import BlueCardsScreen from './screens/BlueScreen/BlueCardsScreen';
import RedCardsScreen from './screens/RedScreen/RedCardsScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Red" component={RedHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Blue" component={BlueHomeScreen} options={{headerShown:false}}/>        
        <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RedQuiz" component={RedQuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BlueQuiz" component={BlueQuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BlueCards" component={BlueCardsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RedHomeScreen" component={RedHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RedCards" component={RedCardsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Anasayfa" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})