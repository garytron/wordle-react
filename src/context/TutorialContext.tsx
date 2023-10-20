import { FC, createContext, useState } from 'react';
import { ChildrenProps, TutorialContextProps } from '../interfaces';

export const TutorialContext = createContext<TutorialContextProps | undefined>(undefined);

export const TutorialProvider:  FC<ChildrenProps> = ({ children }) => {
  const show: boolean = localStorage.getItem('firstTime') !== 'true';
  const [showTutorial, setShowTutorial] = useState(show);

  const openTutorial = () => {
    setShowTutorial(true);
    localStorage.setItem('firstTime', 'true');
  }

  const closeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('firstTime', 'true');
  };

  return (
    <TutorialContext.Provider value={{ showTutorial, openTutorial, closeTutorial }}>
      {children}
    </TutorialContext.Provider>
  );
};
