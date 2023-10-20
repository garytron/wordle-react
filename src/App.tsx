import Wordle from './components/Wordle';
import { StatisticsProvider, TutorialProvider } from './context';
import { useSolutions } from './hooks';

function App() {
  const { solution, setNewSolution } = useSolutions();

  return (
    <>
      {solution && 
        <TutorialProvider>
          <StatisticsProvider>
            <Wordle solution={solution} setNewSolution={setNewSolution} /> 
          </StatisticsProvider>
        </TutorialProvider>
      }
    </>
  )
}

export default App;