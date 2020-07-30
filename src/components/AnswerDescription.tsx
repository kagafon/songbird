/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Item, Container, Button } from 'semantic-ui-react';
import { IAnswer } from 'components/commonTypes';


export interface AnswerDescriptionProps {
  answer: IAnswer;
}

export const AnswerDescription = ({
  answer,
}: AnswerDescriptionProps): JSX.Element => {
  return answer ? (
    <div>
      <div style={{ backgroundImage: `url('${answer.image}')` }}> </div>
      <div>{answer.name} </div>
      <div>{answer.species} </div>
      <div>{answer.audio} </div>
      <div>{answer.description} </div>
    </div>
  ) : (
    <div>Послушай и угадай</div>
  );
};
