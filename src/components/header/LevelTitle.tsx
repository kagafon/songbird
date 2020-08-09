import * as React from 'react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
//import { Segment } from 'semantic-ui-react';
import { PageItem } from 'react-bootstrap';

export interface LevelTitleProps {
  index: number;
  name: string;
}

export const LevelTitle = ({ index, name }: LevelTitleProps): JSX.Element => {
  const levelState = useSelector<QuizState, boolean>(
    (state) => state.levelStates[index]
  );

  return (
    <PageItem
      className={`flex-grow-1 text-center ${levelState ? 'current' : ''}`}
    >
      {name}
    </PageItem>
  );
};
