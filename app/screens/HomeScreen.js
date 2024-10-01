import React, { useState, useContext } from 'react';
import { View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const { tasks, toggleTaskComplete } = useContext(TaskContext);
  const [showCompleted, setShowCompleted] = useState(false);
  const navigation = useNavigation();

  const filteredTasks = tasks.filter(task => showCompleted ? task.completed : !task.completed);


  return (
    <View>
      <Button 
        title={showCompleted ? "Show Incomplete" : "Show Completed"}
        onPress={() => setShowCompleted(!showCompleted)}
      />
      <ScrollView>
        {filteredTasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('TaskDetails', {
              taskName: task.name,
              time: task.time,
              index
            })}
          >
            <TaskCard
              key={index} 
              taskName={task.name} 
              time={task.time}
              completed={task.completed}
              onToggleComplete={() => toggleTaskComplete(index)} />
          </TouchableOpacity>
        ))}

        <Button 
          title="Create New Task"
          onPress={() => navigation.navigate('NewTask')}  // Navigate to NewTask screen}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
