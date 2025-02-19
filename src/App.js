import React from 'react';
import { useState } from 'react';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

//resources - https://www.w3schools.com/jsref/jsref_map.asp https://www.w3schools.com/jsref/jsref_operators.asp 

// Simple MenuPage Component
function MenuPage() {
  const [selectedExercise, setSelectedExercise] = useState(null); //selectedExercise is the variable and setSelectedExercise updates the variable, initially null for the ternary operator

  const Push = [
    { name: 'Push-Ups', type: 'Duration' },
    { name: 'Push-Ups', type: 'Repetition' }
  ];

  const Run = [
    { name: 'Running', type: 'Duration' },
    { name: 'Running', type: 'Repetition' }
  ];

  const Plank = [
    { name: 'Planks', type: 'Duration' },
    { name: 'Planks', type: 'Repetition' }
  ];

  return (
    <div id="Menu">
      {/* Show menu if no exercise is selected */}
      {selectedExercise === null ? ( //ternary operator, checks if selected exercise is true or false, if true (not selected an exercise yet) continue
        <div>
          <h1>Exercises</h1> {/*page title*/}

        <div>
        <h2>Push-Ups</h2> {/*exercise title*/}
          {Push.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}> {exercise.type} </button>
             ))} {/*map method, create the duration and repetition buttons for the push ups*/}
        </div>

        <div>
        <h2>Running</h2> {/*exercise title*/}
          {Run.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}> {exercise.type} </button>
             ))} {/*map method, create the duration and repetition buttons for the running*/}
        </div>

        <div>
        <h2>Planks</h2> {/*exercise title*/}
          {Plank.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}> {exercise.type}</button>
             ))} {/*map method, create the duration and repetition buttons for the planks*/}
        </div>

        </div>

      ) : ( //if ternary operator is false (they selected an exercise) so redirect them to the duration or repetition page
        // Show selected exercise component
        <div id='Redirect'>
          <h1>{selectedExercise.name}</h1> {/*page title is the exercise title*/}

          {selectedExercise.type === 'Duration' ? ( //turnary operator, if they selected duration then redirect to the duration page
            <DurationExercise name={selectedExercise.name} />
          ) : ( //if false (they selected repetition) then redirect to the repetiton page
            <RepetitionExercise name={selectedExercise.name} />
          )}

          <br></br>
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button> {/* Button to go back to the menu */}

        </div>
      )}
    </div>
  );
}

// App Component
const App = () => {
  return (
    <div className="App">
      <MenuPage />
    </div>
  );
};

export default App;
