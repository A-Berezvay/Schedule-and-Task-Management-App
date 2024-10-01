import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import * as Notifications from 'expo-notifications';

const scheduleNotification = async (taskName, time) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Task Reminder",
      body: `${taskName} is due at ${time}`,
    },
    trigger: {
      seconds: 5, // Customize for the task's time
    },
  });
};

const NewTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = () => {
    const newTask = { name: taskName, time};
    addTask(newTask);

    scheduleNotification(taskName, time);

    navigation.goBack(); // Navigate back after creating the task
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Create Task" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default NewTaskScreen;
