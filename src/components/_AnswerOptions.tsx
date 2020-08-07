/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Item, Container, Button } from 'semantic-ui-react';

import { AnswerOption } from './AnswerOption';
import { IAnswer } from './commonTypes';

export interface AnswerOptionsProps {
  answers: Array<IAnswer>;
  onSelectAnswer: (v: IAnswer) => boolean;
}

export const AnswerOptions = ({
  answers,
  onSelectAnswer,
}: AnswerOptionsProps): JSX.Element => {
  return <></>;
  /*   return (
    <Button.Group vertical>
      {answers.map((x) => (
        <AnswerOption key={x.id} onSelectAnswer={onSelectAnswer} answer={x} />
      ))}
    </Button.Group>
  ); */
};
/* 
export const AnswerOptionsMemo = React.memo(
  ({ answers, onSelectAnswer }: AnswerOptionsProps) => (
    <AnswerOptions answers={answers} onSelectAnswer={onSelectAnswer} />
  )
);
 */
