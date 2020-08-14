/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { IAnswer } from 'components/commonTypes';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { Row, Col, Container } from 'react-bootstrap';

export interface AnswerDescriptionProps {
  answer: IAnswer;
}

export const AnswerDescription = (): JSX.Element => {
  const answer = useSelector<QuizState, IAnswer>(
    (state) => state.selectedOption
  );
  return answer ? (
    <>
      <Row className="mt-3">
        <Col xs="6">
          <div
            className="rounded quiz-img"
            style={{
              backgroundImage: `url(${answer.image})`,
            }}
          />
        </Col>
        <Col xs="6">
          <div>{answer.name} </div>
          <div>{answer.species} </div>
          <div>{answer.audio} </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12">{answer.description}</Col>{' '}
      </Row>
    </>
  ) : (
    <Row className="mt-3">Послушай и угадай</Row>
  );
};
