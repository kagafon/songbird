/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import useSound from 'use-sound';

import { Item, Container, Button } from 'semantic-ui-react';
import { IAnswer } from './commonTypes';
export interface AnswerOptionProps {
  onSelectAnswer: (answer: IAnswer) => boolean;
  answer: IAnswer;
}

export const AnswerOption = ({
  answer,
  onSelectAnswer,
}: AnswerOptionProps): JSX.Element => {
  const [checkResult, setCheckResult] = React.useState<boolean>();
  //const [play] = useSound('assets/audio/hover.ogg', { volume: 0.5 });

  React.useEffect(() => {
    setCheckResult(undefined);
  }, [answer]);

  const onClick = React.useCallback(() => {
    const result = onSelectAnswer(answer);
    setCheckResult((prevCheck) =>
      prevCheck === undefined ? result : prevCheck
    );
  }, [onSelectAnswer, answer]);

  if (checkResult === undefined)
    return <Button onClick={onClick}>{answer.name}</Button>;

  return (
    <Button color={checkResult ? 'green' : 'purple'} onClick={onClick}>
      {answer.name}
    </Button>
  );
};
