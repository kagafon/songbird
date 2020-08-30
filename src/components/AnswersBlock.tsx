import * as React from 'react';

import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { AnswerDescription } from './AnswerDescription';
import { IAnswer } from './commonTypes';
import { AnswerOption } from './AnswerOption';

const AnswersBlock = (): JSX.Element => {
  const answers = useSelector<QuizState, Array<IAnswer>>(
    (state) => state.answers
  );
  return answers ? (
    <Row>
      <Col xs="12" md="3" className="mt-3">
        <ListGroup>
          {answers.map((x) => (
            <AnswerOption key={x.id} answer={x} />
          ))}
        </ListGroup>
      </Col>
      <Col xs="12" md="9" className="mt-3 pl-md-0">
        <AnswerDescription />
      </Col>
    </Row>
  ) : (
    <></>
  );
};

export default AnswersBlock;
