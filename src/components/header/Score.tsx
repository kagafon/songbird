import * as React from 'react';
import { Statistic } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';

const Score = (): JSX.Element => {
  const score = useSelector<QuizState, number>((state) => state.score);

  return (
    <Statistic size="tiny">
      <Statistic.Value>{score}</Statistic.Value>
      <Statistic.Label>баллы</Statistic.Label>
    </Statistic>
  );
};

export default Score;
