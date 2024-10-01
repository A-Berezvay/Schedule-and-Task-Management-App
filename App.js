import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './app/navigation/StackNavigator';
import TaskProvider from './app/context/TaskContext';

export default function App() {
  return (
  <TaskProvider>
    <StackNavigator />
  </TaskProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
