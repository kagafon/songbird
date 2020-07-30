import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { AnswerDescription } from './AnswerDescription';
import { IAnswer } from './commonTypes';
import { AnswerOption } from './AnswerOption';

export interface AnswersBlockProps {
  answers: Array<IAnswer>;
  setSelected: (answer: IAnswer) => boolean;
}

export const AnswersBlock = ({
  answers,
  setSelected,
}: AnswersBlockProps): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<IAnswer>();

  const onSelectAnswer = React.useCallback(
    (answer: IAnswer) => {
      setSelectedAnswer(answer);
      return setSelected(answer);
    },
    [setSelected]
  );

  return (
    <>
      {React.useMemo(
        () => (
          <Button.Group vertical>
            {answers.map((x) => (
              <AnswerOption
                key={x.id}
                onSelectAnswer={onSelectAnswer}
                answer={x}
              />
            ))}
          </Button.Group>
        ),
        [answers, onSelectAnswer]
      )}
      <AnswerDescription answer={selectedAnswer} />
    </>
  );
};
