import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from 'store/root-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from './commonTypes';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
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
    return <ListGroup.Item onClick={onClick}>{answer.name}</ListGroup.Item>;

  return (
    <ListGroup.Item color={checkResult ? 'green' : 'purple'} onClick={onClick}>
      {answer.name}
    </ListGroup.Item>
  );
};
