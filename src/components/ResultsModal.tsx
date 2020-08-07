import * as React from 'react';

import { Button, Modal } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { loadNextLevel } from 'store/root-redux';

const ResultsModal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { score, maxScore, finished } = useSelector<QuizState, QuizState>(
    (state) => state
  );

  return (
    <Modal open={finished}>
      <Modal.Header>{`Набрано ${score} из ${maxScore}`}</Modal.Header>
      <Modal.Actions>
        <Button onClick={() => loadNextLevel(dispatch, 0)}>Снова</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ResultsModal;
