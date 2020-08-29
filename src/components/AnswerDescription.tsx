/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { IAnswer } from 'components/commonTypes';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { Row, Col, Container } from 'react-bootstrap';
import { StyledAudioPlayer } from './AudioPlayer';

export interface AnswerDescriptionProps {
  answer: IAnswer;
}

export const AnswerDescription = (): JSX.Element => {
  const answer = useSelector<QuizState, IAnswer>(
    (state) => state.selectedOption
  );
  return answer ? (
    <div className="border-color-2 h-100 rounded bg-color-3 text-color-5 d-flex flex-column">
      <div className="p-3 d-flex flex-column flex-md-row">
        <div className="mr-md-3 d-flex justify-content-center flex-shrink-0">
          <div
            className="rounded quiz-img"
            style={{
              backgroundImage: `url(${answer.image})`,
            }}
          />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h5 className="border-bottom-color-5 py-2 text-center text-md-left">
            {answer.name}
          </h5>
          <h6 className="border-bottom-color-5 py-2 text-center text-md-left">
            {answer.species}
          </h6>
          <div className="mt-md-auto mt-3">
            <StyledAudioPlayer track={answer.audio} />
          </div>
        </div>
      </div>
      <div className="position-relative mx-3 mb-3 h-100">
        <div className="text-justify overflow-auto h-100 answer-description__text">
          {answer.description}
        </div>
      </div>
    </div>
  ) : (
    <div className="border-color-2 p-3 h-100 rounded bg-color-3 text-color-5 d-flex flex-column justify-content-center align-items-center">
      <div className="h4 m-0">Послушай и определи</div>
    </div>
  );
};
