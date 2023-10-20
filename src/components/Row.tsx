import { FC } from 'react';
import { RowProps } from '../interfaces';
import SquareKey from './SquareKey';

const Row: FC<RowProps> = ({ guess, currentGuess }) => {
  if(guess) {
    return (
      <div className='row flex text-center justify-center past'>
        {guess.map((l, i) =>
          <SquareKey key={i} letter={l} />
        )}
      </div>
    )
  }

  if(currentGuess) {
    const letters = currentGuess.split('');
    return (
      <div className='row flex text-center justify-center current'>
        {letters.map((l,i) => 
          <SquareKey key={i} letter={l} filled />
        )}
        {[...Array(5 - letters.length)].map((_, i) => <SquareKey key={i} />)}
      </div>
    )
  }

  return (
    <div className='flex text-center justify-center'>
      <SquareKey />
      <SquareKey />
      <SquareKey />
      <SquareKey />
      <SquareKey />
    </div>
  )
}

export default Row;