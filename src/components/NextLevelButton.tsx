import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { loadNextLevel } from 'store/root-redux';
import { Button, Row } from 'react-bootstrap';

export interface QuestionBlockProps {
  title: string;
  imageUrl: string;
  audioUrl: string;
  solved: boolean;
}

export const NextLevelButton = (): JSX.Element => {
  const { solved, level, maxLevel } = useSelector<QuizState, QuizState>(
    (state) => state
  );
  const dispatch = useDispatch();

  return (
    <Row className="my-3">
      <Button
        variant={solved ? 'success' : 'primary'}
        className="w-100"
        disabled={!solved}
        onClick={() => loadNextLevel(dispatch)}
      >
        {level === maxLevel ? 'Показать результат' : 'Хочу еще!'}
      </Button>
    </Row>
  );
};
