import { memo } from 'react';

type Props = {
  handleClick: () => void;
};

export const UseCallback = memo(({ handleClick }: Props) => {
  console.log('useCallback rendering');
  setTimeout(() => {
    console.log('useCallback: HeavyProcessing done');
  }, 1000);
  return <button onClick={handleClick}>CallBack</button>;
});
