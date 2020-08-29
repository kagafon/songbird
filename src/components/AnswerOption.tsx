import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from 'store/root-redux';
import { QuizState } from 'store/root-reducer';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import useSound from 'use-sound';
import { IAnswer } from './commonTypes';

export interface AnswerOptionProps {
  answer: IAnswer;
}

export const AnswerOption = ({ answer }: AnswerOptionProps): JSX.Element => {
  const dispatch = useDispatch();
  const checkResult = useSelector<QuizState, boolean>(
    (state) => state.checkedState[answer.id]
  );
  const selectedOption = useSelector<QuizState, IAnswer>(
    (state) => state.selectedOption
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
  const getColor = React.useCallback(() => {
    if (checkResult === undefined) return 'color-5';
    if (checkResult) return 'success';
    return 'danger';
  }, [checkResult]);
  return (
    <ListGroup.Item
      onClick={onClick}
      className={`px-md-1 border-color-2 ${
        selectedOption && selectedOption.id === answer.id ? 'bg-color-2' : ''
      }`}
    >
      <div className="d-flex flex-row align-items-center">
        <div
          className={`d-flex bg-${getColor()} align-items-center m-2 flex-shrink-0 border-color-5`}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            transition: 'background-color 0.2s ease-out',
          }}
        />
        <div
          className="d-flex align-items-center text-color-5"
          style={{ transition: 'color 0.2s ease-out' }}
        >
          {answer.name}
        </div>
      </div>
    </ListGroup.Item>
  );
};
