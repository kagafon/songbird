import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from 'store/root-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from './commonTypes';
// import useSound from 'use-sound';

export interface AnswerOptionProps {
  answer: IAnswer;
}

export const AnswerOption = ({ answer }: AnswerOptionProps): JSX.Element => {
  const dispatch = useDispatch();
  const checkResult = useSelector<QuizState, boolean>(
    (state) => state.checkedState[answer.id]
  );
  // const [play] = useSound('assets/audio/hover.ogg', { volume: 0.5 });

  const onClick = React.useCallback(() => selectOption(dispatch, answer), [
    answer,
    dispatch,
  ]);

  if (checkResult === undefined)
    return <Button onClick={onClick}>{answer.name}</Button>;

  return (
    <Button color={checkResult ? 'green' : 'purple'} onClick={onClick}>
      {answer.name}
    </Button>
  );
};
