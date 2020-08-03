import * as React from 'react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { Segment } from 'semantic-ui-react';

export interface LevelTitleProps {
  index: number;
  name: string;
}

export const LevelTitle = ({ index, name }: LevelTitleProps): JSX.Element => {
  const levelState = useSelector<QuizState, boolean>(
    (state) => state.levelStates[index]
  );

  return (
    <Segment
      inverted
      textAlign="center"
      color={levelState ? 'green' : 'grey'}
      disabled={levelState === undefined}
    >
      {name}
    </Segment>
  );
};
