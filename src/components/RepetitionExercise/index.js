//import react from 'react';
import {useState} from 'react';
//import '../App.js';

const RepetitionExercise = () => {
    const [count, adding] = useState(0); //set the initial value to zero, count is the variable, adding is the function that changes the variable

    return(
        <div id = 'RepPage'>
            <div id = 'video'>
                <h3>Video</h3> {/*place holder for video*/}
            </div>

            <div id='Reps'>
                <h2>Reps: {count}</h2> {/*show the count of the reps*/}
                <button onClick={() => adding(count + 1)}>+1 Rep</button> {/*pressing the button adds one to the count*/}
                <button onClick={() => adding(0)}>Reset</button> {/*pressing reset resets the count to zero*/}
            </div>

        </div>
    );
};

export default RepetitionExercise;