import { useEffect, useState } from 'react';

const useSolutions = () => {
  const [solution, setSolution] = useState<string | null>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch('./words.txt');
        const content = await response.text();
        const lines = content.split('\n').filter(line => line.trim() !== '' && line.length === 5 && ((/^[A-Za-z]+$/).test(line.trim())));

        //Get random word.
        const randomWord = lines[Math.floor(Math.random() * lines.length)];
        setSolution(randomWord);
        setLines(lines);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchFileContent();
  }, [setSolution]);


  const setNewSolution = (isCorrect: boolean): void => {
    if(!isCorrect) {
      let newSolution: string;

      newSolution = getRandomSolution();

      while(solution === newSolution) {
        newSolution = getRandomSolution();
      }

      setSolution(newSolution);
    }
  };

  const getRandomSolution = (): string => lines[Math.floor(Math.random() * lines.length)];

  return {solution, setNewSolution};
}

export default useSolutions;