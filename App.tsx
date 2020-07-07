import 'react-native-gesture-handler';
import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import MessageListScreen from './src/screens/MessageListScreen';
import Message from './src/components/Message';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Messages" component={MessageListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;