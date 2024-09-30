import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ taskName, time }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{taskName}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default TaskCard;
