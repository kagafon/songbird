import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { loadNextLevel } from 'store/root-redux';
import { Button } from 'react-bootstrap';

export interface QuestionBlockProps {
  title: string;
  imageUrl: string;
  audioUrl: string;
  solved: boolean;
}

export const NextLevelButton = (): JSX.Element => {
  const solved = useSelector<QuizState, boolean>((state) => state.solved);
  const dispatch = useDispatch();

  return (
    <Button disabled={!solved} onClick={() => loadNextLevel(dispatch)}>
      Next Level
    </Button>
  );
};
