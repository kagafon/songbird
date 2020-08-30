import * as React from 'react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { PageItem } from 'react-bootstrap';

export interface LevelTitleProps {
  index: number;
  name: string;
}

export const LevelTitle = ({ index, name }: LevelTitleProps): JSX.Element => {
  const levelState = useSelector<QuizState, boolean>(
    (state) => state.levelStates[index]
  );

  return levelState === undefined ? (
    <PageItem className="flex-grow-1 text-center">{name}</PageItem>
  ) : (
    <PageItem
      className={`flex-grow-1 text-center ${levelState ? 'current' : 'passed'}`}
    >
      {name}
    </PageItem>
  );
};
