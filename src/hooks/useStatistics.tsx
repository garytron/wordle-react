import { useContext } from 'react';
import { StatisticsContext } from '../context';

const useStatistics = () => {
  const context = useContext(StatisticsContext);

  if (!context) {
    throw new Error('useStatistics must be used within a StaisticsProvider');
  }
  return context;
}

export default useStatistics;