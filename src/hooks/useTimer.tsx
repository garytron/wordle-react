import { useEffect, useState } from 'react';

const useTimer = (isCorrect: boolean, turn: number, showTutorial: boolean, setNewSolution: (isCorrect: boolean) => void) => {
  const [time, setTime] = useState(5 * 60);   //5 minutes in seconds.

  useEffect(() => {
    let timer: number;

    if(!showTutorial) {
      timer = setInterval(() => {
        // Update the time remaining every second
        setTime(prevTime => prevTime - 1);
      }, 1000);
      
      if(isCorrect) {
        clearInterval(timer);
        return;
      }
  
  
      if(turn > 4) {
        clearInterval(timer);
        return;
      }
    
      if (time === 0) {
        // Trigger some action when the countdown reaches zero
        clearInterval(timer);
        setNewSolution(true);
        return;
      }
    }
  

    return () => clearInterval(timer);
  }, [time, isCorrect, turn, setNewSolution, showTutorial]);


  const resetTime = () => setTime(5 * 60);

  return {time, resetTime};
}

export default useTimer;