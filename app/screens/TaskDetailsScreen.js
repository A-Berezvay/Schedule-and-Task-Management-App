import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { taskName, time } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{taskName}</Text>
      <Text style={styles.time}>Time: {time}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default TaskDetailsScreen;
