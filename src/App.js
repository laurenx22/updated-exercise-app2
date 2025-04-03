import React from 'react';
//import { useState } from 'react';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
//import RunningExercise from './components/RunningExercise';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';

//resources - https://www.w3schools.com/jsref/jsref_map.asp https://www.w3schools.com/jsref/jsref_operators.asp 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
