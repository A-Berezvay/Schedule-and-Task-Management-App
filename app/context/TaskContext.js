import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.error('Failed to load tasks', error);
        }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Failed to save tasks', error);
        }
    };

    saveTasks();
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };
  
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
