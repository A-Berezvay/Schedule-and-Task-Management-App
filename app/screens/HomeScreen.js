import React from 'react';
import { ScrollView } from 'react-native';
import TaskCard from '../components/TaskCard';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const tasks = [
        { name: 'Team Meeting', time: '10:00 AM' },
        { name: 'Lunch Break', time: '12:00 PM' },
        { name: 'Client Call', time: '3:00 PM' },
    ];

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('TaskDetails', {
                taskName: task.name,
                time: task.time
            })}
            >
                <TaskCard key={index} taskName={task.name} time={task.time} />
            </TouchableOpacity>
      ))}

      <Button 
        title="Create New Task"
        onPress={() => navigation.navigate('NewTask')}  // Navigate to NewTask screen}
      />
    </ScrollView>
  );
};

export default HomeScreen;
