import * as React from 'react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';

const Score = (): JSX.Element => {
  const score = useSelector<QuizState, number>((state) => state.score);

  return <h5 className="m-0 text-color-6">{`Score: ${score}`}</h5>;
};

export default Score;
