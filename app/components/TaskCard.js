import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const TaskCard = ({ taskName, time, completed, priority, onToggleComplete }) => {
  return (
    <View style={[styles.card, priorityStyles[priority]]}>
      <View style={styles.info}>
        <Text style={completed ? styles.completed : styles.name}>{taskName}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.priority}>Priority: {priority}</Text>
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
  priority: {
    marginTop: 8,
    fontSize: 14,
  },
  info: {
    flexDirection: 'column',
  },
});

const priorityStyles = {
  low: {
    borderLeftWidth: 4,
    borderLeftColor: 'green',
  },
  medium: {
    borderLeftWidth: 4,
    borderLeftColor: 'orange',
  },
  high: {
    borderLeftWidth: 4,
    borderLeftColor: 'red',
  },
};

export default TaskCard;
