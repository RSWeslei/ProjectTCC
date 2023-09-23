import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/index';
import SignUp from './src/screens/Signup/index';
import Home from './src/screens/Home/index';
import 'react-native-gesture-handler'
import {useEffect} from "react";
import {BackHandler} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
          }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;