import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { AnswerDescription } from './AnswerDescription';
import { IAnswer } from './commonTypes';
import { AnswerOption } from './AnswerOption';
import { Row, Col, ListGroup } from 'react-bootstrap';

const AnswersBlock = (): JSX.Element => {
  const answers = useSelector<QuizState, Array<IAnswer>>(
    (state) => state.answers
  );
  return answers ? (
    <Row className="mt-3">
      <Col xs="12" md="3">
        <ListGroup>
          {answers.map((x) => (
            <AnswerOption key={x.id} answer={x} />
          ))}
        </ListGroup>
      </Col>
      <Col xs="12" md="9">
        <AnswerDescription />
      </Col>
    </Row>
  ) : (
    <></>
  );
};

export default AnswersBlock;
