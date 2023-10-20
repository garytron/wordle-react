import { FC } from 'react'
import Modal from './Modal';
import { ResultsProps } from '../interfaces';
import { convertSecondsToMMSS } from '../utils';
import { useStatistics } from '../hooks';

const Results: FC<ResultsProps> = ({ isCorrect, solution, turn, totalWins, totalCount, time, resetGame, resetTime, resetModal }) => {
  const { closeResults } = useStatistics();

  const onClick = () => {
    if(time === 0) {
      resetGame();
      resetTime();
      resetModal();
    }

    if(isCorrect) {
      resetGame();
      resetTime();
      resetModal();
    }

    if(turn > 4) {
      resetGame();
      resetTime();
      resetModal();
    }
    
    closeResults();
  }

  return (
    <Modal className='m-[15%]'>
      <h1 className='font-bold text-[35px] mb-10'>Estadísticas</h1>
      <div className='w-full flex justify-around mb-10'>
        <div className='flex flex-col'>
          <p className='text-[25px] font-bold'>{totalCount}</p>
          <p>Jugadas</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[25px] font-bold'>{totalWins}</p>
          <p>Victorias</p>
        </div>
      </div>
      {(!isCorrect && time === 0) && 
        <p className='mb-6'>La palabra era: <span className='text-black font-bold uppercase tracking-wide text-sm'>{solution}</span></p>
      }
      <p className='uppercase m-3'>Siguiente palabra</p>
      <p className='font-bold uppercase mb-6'>{convertSecondsToMMSS(time)}</p>
      <button className='min-w-[250px] bg-green-700 text-white font-bold p-2 rounded-md text-[18px]' onClick={onClick}>Aceptar</button>
    </Modal>
  )
}

export default Results;