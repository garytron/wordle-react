import { useEffect, useState } from 'react';
import { ColoredKey, Guesses, Token } from '../interfaces';
import useCount from './useCount';

const useWordle = (solution: string) => {
  const {totalWins, setCountWin, total, setCountTotal} = useCount();
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<Guesses>([...Array(5)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [usedKeys, setUsedKeys] = useState<ColoredKey | object>({})

  // Format every letter into array of colored letters
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray: (string | null)[] = [...solution];
    const formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'};
    });

    //Find any green colors.
    formattedGuess.forEach((l, i) => {
      if(solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green';
      }
    })

    //Find any yellow colors.
    formattedGuess.forEach((l, i) => {
      if(solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    })

    return formattedGuess;
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: Token[]) => {
    if(currentGuess === solution) {
      setCountWin();
      setCountTotal();
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prev) => [...prev, currentGuess]);
    setTurn((prev) => prev + 1);
    setUsedKeys((prev) => {
      const newKeys = {...prev};

      formattedGuess.forEach((l) => {
        const key = l.key.toUpperCase() as keyof ColoredKey;
        const currentColor: string | undefined = newKeys[key];

        if(l.color === 'green') {
          newKeys[key] = 'green';
          return;
        }

        if(l.color === 'yellow' && currentColor !== 'green') {
          newKeys[key] = 'green';
          return;
        }

        if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
          newKeys[key] = 'grey';
          return;
        }
        
      });
  
      return newKeys;
    })
    setCurrentGuess('');
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = (e: KeyboardEvent ) => {
    const keyValue = e.key;
  
    if(keyValue === 'Enter') {
      if(turn > 4) {
        console.log('you used all your guesses');
        return;
      }

      if(history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }

      if(currentGuess.length !== 5) {
        console.log('word must be 5 chars long');
        return;
      }

      const formatted = formatGuess();

      addNewGuess(formatted);
    }

    if(keyValue === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if(/^[A-Za-z]$/.test(keyValue.toLowerCase())) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + keyValue.toLowerCase())
      }
    }
  }

  // handle click event & track current guess
  // if user presses enter, add the new guess

  const handleClickKeypad = (letter: string) => {
  
    if(letter === 'Enter') {
      if(turn > 4) {
        console.log('you used all your guesses');
        return;
      }

      if(history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }

      if(currentGuess.length !== 5) {
        console.log('word must be 5 chars long');
        return;
      }

      const formatted = formatGuess();

      addNewGuess(formatted);
    }

    if(letter === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if(/^[A-Za-z]$/.test(letter.toLowerCase())) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + letter.toLowerCase())
      }
    }
  }

  const clearBoard = (): void => {
    setCurrentGuess('');
    setGuesses([...Array(5)]);
    setHistory([]);
    setUsedKeys({});
  }

  const resetGame = (): void => {
    setTurn(0);
    setIsCorrect(false);
    clearBoard();
  }

  useEffect(() => {
    if(turn > 4)
      setCountTotal();
  },[turn]);

  return {turn, currentGuess, guesses, isCorrect, usedKeys, clearBoard, resetGame, handleKeyup, handleClickKeypad, totalWins, total, setCountTotal};
}

export default useWordle;