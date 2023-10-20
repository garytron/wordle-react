import { FC, useEffect } from 'react';
import { WordleProps } from '../interfaces';
import { useStatistics, useTimer, useTutorial, useWordle } from '../hooks';
import Grid from './Grid';
import Keypad from './Keypad';
import Results from './Results';
import Navbar from './Navbar';
import Tutorial from './Tutorial';

const Wordle: FC<WordleProps> = ({ solution, setNewSolution }) => {
  const {currentGuess, guesses, isCorrect, turn, usedKeys, resetGame, handleKeyup, handleClickKeypad, totalWins, total, setCountTotal} = useWordle(solution);
  const {showTutorial} = useTutorial();
  const {showResults, openResults} = useStatistics();
  const {time, resetTime} = useTimer(isCorrect, turn, showTutorial, setNewSolution);

  useEffect(() => {
    if(!showTutorial) {
      window.addEventListener('keyup', handleKeyup);
  
      if(isCorrect) {
        setNewSolution(isCorrect);
        setTimeout(() => openResults(), 2000);
        window.removeEventListener('keyup', handleKeyup);
      }
  
      if(turn > 4) {
        setNewSolution(true);
        setTimeout(() => openResults(), 2000);
        window.removeEventListener('keyup', handleKeyup);
      }
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [isCorrect, turn, handleKeyup, setNewSolution, showTutorial]);


  useEffect(() => {
    if(time === 0) {
      setNewSolution(true);
      setCountTotal();
      setTimeout(() => openResults(), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [time]);

  const resetModal = () => {
    setNewSolution(false);
  }

  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      <Navbar />
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} handleClickKeypad={handleClickKeypad} />
      {showTutorial && <Tutorial />}
      {showResults && <Results isCorrect={isCorrect} turn={turn} solution={solution} totalWins={totalWins} totalCount={total} time={time} resetGame={resetGame} resetTime={resetTime} resetModal={resetModal}/>}
    </div>
  )
}

export default Wordle;