import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from 'store/root-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from './commonTypes';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import useSound from 'use-sound';

export interface AnswerOptionProps {
  answer: IAnswer;
}

export const AnswerOption = ({ answer }: AnswerOptionProps): JSX.Element => {
  const dispatch = useDispatch();
  const checkResult = useSelector<QuizState, boolean>(
    (state) => state.checkedState[answer.id]
  );
  // const [play] = useSound('assets/audio/hover.ogg', { volume: 0.5 });
  const [playFail] = useSound('assets/audio/fail.mp3', { volume: 1 });
  const [playWin] = useSound('assets/audio/win.mp3', { volume: 1 });

  const onClick = React.useCallback(() => selectOption(dispatch, answer), [
    answer,
    dispatch,
  ]);

  React.useEffect(() => {
    if (checkResult !== undefined) {
      (checkResult ? playWin : playFail)();
    }
  }, [checkResult, playWin, playFail]);

  if (checkResult === undefined)
    return <ListGroup.Item onClick={onClick}>{answer.name}</ListGroup.Item>;

  return (
    <ListGroup.Item color={checkResult ? 'green' : 'purple'} onClick={onClick}>
      {answer.name}
    </ListGroup.Item>
  );
};
