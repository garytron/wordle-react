import { FC, createContext, useState } from 'react';
import { ChildrenProps, StatisticsContextProps } from '../interfaces';

export const StatisticsContext = createContext<StatisticsContextProps | undefined>(undefined);

export const StatisticsProvider:  FC<ChildrenProps> = ({ children }) => {
  const [showResults, setShowResults] = useState<boolean>(false);

  const openResults = () => setShowResults(true);

  const closeResults = () => setShowResults(false);

  return (
    <StatisticsContext.Provider value={{ showResults, openResults, closeResults }}>
      {children}
    </StatisticsContext.Provider>
  );
};
