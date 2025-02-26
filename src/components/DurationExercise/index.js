//import react from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import RunningExercise from '../RunningExercise'; //display laps

//resources- https://www.youtube.com/watch?v=t032MnGcIWQ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const DurationExercise = () => {
  const [time, setTime] = useState(0); //start the clock at zero, time is the variable, setTime updates the variable
  const [clock, timerRunning] = useState(false); //set to false so clock doesnt run until start button is clicked, timerRunning is to set the clock

  useEffect(() => {
    let timer; //set interval variable
    if (clock) { //if the timer is running
      timer = setInterval(() => setTime((sec) => sec + 1), 1000); //1000 milliseconds = 1 second, add 1 to the timer every one second
    }
    return () => clearInterval(timer); //clear the interval that is counting the time
  }, [clock]); //dependency array

  return (
    <div id='timer'>

    <div id = 'video'>
    <h3>Video</h3> {/*place holder for video*/}
    </div>

      <p>{String(Math.floor(time / 60)).padStart(2, '0')} : {String(time % 60).padStart(2, '0')}</p> {/*format the minutes : seconds*/}
      {/*string converts it into a string. time/60 gets the minutes and the math.floor rounds down to the nearest whole number. pad start makes the timer have at least two place holders (zeroes)*/}
      {/*string converts it into a string. time%60 finds the remainder of the time/60. pad start makes the timer have at least two place holders (zeroes) */}

      <div id='timerButtons'>
        <button onClick={() => timerRunning(true)} disabled={clock}>Start</button> {/*start button- when clicked timer starts counting up, isrunning is disabled so you cant start multiple times without reset*/}
        <button onClick={() => timerRunning(false)}>Stop</button> {/*stop button - changes the running to false but doesnt change the time.*/}
        <br></br>
        <button onClick={() => {timerRunning(false); setTime(0);}}>Reset</button> {/*reset button- when it is clicked set time to zero*/}
        <RunningExercise currentTime = {time}/>
      </div>

    </div>
  );
};

export default DurationExercise;