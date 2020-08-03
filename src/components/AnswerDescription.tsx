/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { IAnswer } from 'components/commonTypes';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';

export interface AnswerDescriptionProps {
  answer: IAnswer;
}

export const AnswerDescription = (): JSX.Element => {
  const answer = useSelector<QuizState, IAnswer>(
    (state) => state.selectedOption
  );
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
