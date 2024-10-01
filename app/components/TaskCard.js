import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const TaskCard = ({ taskName, time, completed, onToggleComplete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={completed ? styles.completed : styles.name}>{taskName}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Switch 
        value={completed}
        onValueChange={onToggleComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completed: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  info: {
    flexDirection: 'column',
  },
});

export default TaskCard;
