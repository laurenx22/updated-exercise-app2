import React from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-elements';

const exercises = [
    { name: 'Push-Ups', type: 'Duration' },
    { name: 'Push-Ups', type: 'Repetition' },
    { name: 'Running', type: 'Duration' },
    { name: 'Running', type: 'Repetition' },
    { name: 'Planks', type: 'Duration' },
    { name: 'Planks', type: 'Repetition' },
  ];

  const Home = ({ navigation }) => {
    const renderItem = ({ item }) => (
      <Button
      title={item.type}
      onPress={() => navigation.navigate(
        item.type === 'Duration' ? 'DurationExercise' : 'RepetitionExercise',
        {
          exercise: item,
        }
      )}
    />
  );
  
    return (
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  
  export default Home;