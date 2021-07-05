import React from 'react'
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import TaskForm from './screens/TaskForm'

const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='TaskFormScreen' component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#fff', fontSize: 30, textAlign: 'center'}
});
