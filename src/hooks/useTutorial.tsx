import { useContext } from 'react';
import { TutorialContext } from '../context';

const useTutorial = () => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }
  return context;
}

export default useTutorial;