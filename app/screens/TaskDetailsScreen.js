import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { taskName, time, index } = route.params;
  const { editTask, deleteTask } = useContext(TaskContext);

  const[newTaskName, setNewTaskName] = useState(taskName);
  const [newTime, setNewTime] = useState(time);

  const handleSave = () => {
    const updatedTask = { name: newTaskName, time: newTime };
    editTask(index, updatedTask);
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteTask(index);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Task:</Text>
      <TextInput
        style={styles.input}
        value={newTaskName}
        onChangeText={setNewTaskName}
      />
      <Text style={styles.label}>Edit Time:</Text>
      <TextInput
        style={styles.input}
        value={newTime}
        onChangeText={setNewTime}
      />
      <Button title="Save Changes" onPress={handleSave} />
      <Button title="Delete Task" onPress={handleDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
    width: '80%',
  },
});

export default TaskDetailsScreen;
