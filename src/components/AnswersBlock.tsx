import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { AnswerDescription } from './AnswerDescription';
import { IAnswer } from './commonTypes';
import { AnswerOption } from './AnswerOption';

const AnswersBlock = (): JSX.Element => {
  const answers = useSelector<QuizState, Array<IAnswer>>(
    (state) => state.answers
  );
  return answers ? (
    <>
      <Button.Group vertical>
        {answers.map((x) => (
          <AnswerOption key={x.id} answer={x} />
        ))}
      </Button.Group>
      <AnswerDescription />
    </>
  ) : (
    <></>
  );
};

export default AnswersBlock;
