import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
  const [priority, setPriority] = useState('low');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = () => {
    const newTask = { name: taskName, time, priority };
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
      <Picker
        selectedValue={priority}
        onValueChange={(itemValue) => setPriority(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Low Priority" value="low" />
        <Picker.Item label="Medium Priority" value="medium" />
        <Picker.Item label="High Priority" value="high" />
      </Picker>
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
  picker: {
    marginVertical: 10,
  },
});

export default NewTaskScreen;
