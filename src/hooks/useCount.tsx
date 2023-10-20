import { useState } from 'react';

const useCount = () => {
  const [totalWins, setWins] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const setCountWin = () => setWins(prev => prev + 1);

  const setCountTotal = () => setTotal(prev => prev + 1);

  return {totalWins, setCountWin, total, setCountTotal};
}

export default useCount;