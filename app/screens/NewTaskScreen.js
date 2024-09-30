import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NewTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    // Here you can handle task submission logic (e.g., saving the task)
    console.log('New Task:', taskName, time);
    navigation.goBack(); // Navigate back after creating the task
  };

  return (
    <View style={styles.container}>
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
    </View>
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
