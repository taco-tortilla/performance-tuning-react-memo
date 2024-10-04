import { useCallback, useMemo, useState } from 'react';
import './styles/App.css';
import { Memo } from './components/Memo';
import { UseCallback } from './components/UseCallBack';

function App() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);
  const [fourthCount, setFourthCount] = useState(0);

  const handleClickFirstCount = () => {
    setFirstCount(firstCount + 1);
  };

  const handleClickSecondCount = () => {
    setSecondCount(secondCount + 1);
  };

  const handleClickThirdCount = useCallback(() => {
    setThirdCount(thirdCount + 1);
  }, [thirdCount]);

  const handleClickFourthCount = () => {
    setFourthCount(fourthCount + 1);
  };

  const tenTimes = (count: number) => {
    setTimeout(() => {
      console.log('useMemo: HeavyProcessing done');
    }, 1000);
    return count * 10;
  };

  const tenTimesCount = useMemo(() => tenTimes(fourthCount), [fourthCount]);

  return (
    <>
      <h1>Performance-tuning</h1>
      <div className='card'>
        <button onClick={handleClickFirstCount}>
          first-count is {firstCount}
        </button>
        <button onClick={handleClickSecondCount}>
          second-count is {secondCount} (memo)
        </button>
        <button onClick={handleClickThirdCount}>
          third-count is {thirdCount} (useCallback)
        </button>
        <button onClick={handleClickFourthCount}>
          fourth-count is {fourthCount} (useMemo)
        </button>
      </div>
      <Memo count={secondCount} />
      <p>UseMemo: fourth-ten-times-count is {tenTimesCount}</p>
      <UseCallback handleClick={handleClickThirdCount} />
    </>
  );
}

export default App;

