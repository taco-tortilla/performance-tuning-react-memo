import { memo } from 'react';

type Props = {
  count: number;
};

export const Memo = memo(({ count }: Props) => {
  console.log('Memo rendering');
  setTimeout(() => {
    console.log('Memo: HeavyProcessing done');
  }, 1000);
  return <p>Memo: secont-count is {count}</p>;
});
