//import react from 'react';
import {useState} from 'react';
//import '../App.js';
//import DurationExercise from '../DurationExercise';

//resources- https://www.w3schools.com/jsref/jsref_totimestring.asp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#examples

const RunningExercise = ({currentTime}) => {
    const [lapTime, setLap] = useState([]); //set the initial value to zero, count is the variable, adding is the function that changes the variable

    const recordLapTime = () => {
        const formatTime = new Date(currentTime * 1000).toISOString().substr(14, 5); //date is a js constructor, current time in milliseconds * 1000 to get the seconds
        //toISOString converts date, .substr(14,5) takes away the the extra parts of the string and just keeps the minutes and seconds I want (positions 14 from the beginning and 5 from the end)
        //const formatTime = new Date(currentTime * 1000).toTimeString();
        setLap([...lapTime, formatTime])
    };

    return(
        <div id = 'Running'>
        
            <div id='LapButton'>
            <button onClick={recordLapTime}>Record Lap</button>
            </div>

            <div id= 'Laps'>
                <h4>Laps:</h4>
                <ul>
                    {lapTime.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RunningExercise;