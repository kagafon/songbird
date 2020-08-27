import * as React from 'react';
import { Item, Container, Button } from 'semantic-ui-react';

import { StyledAudioPlayer } from 'components/AudioPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from 'components/commonTypes';
import { loadNextLevel } from 'store/root-redux';
import { Jumbotron, Image, ListGroup, Row, Col } from 'react-bootstrap';
import { useTransition, animated } from 'react-spring';

export interface QuestionBlockProps {
  title: string;
  imageUrl: string;
  audioUrl: string;
  solved: boolean;
}

export const QuestionBlock = (): JSX.Element => {
  const rightAnswer = useSelector<QuizState, IAnswer>(
    (state) => state.rightAnswer
  );
  const { solved, secretBird } = useSelector<QuizState, QuizState>(
    (state) => state
  );
  const dispatch = useDispatch();

  /*   const transitions = useTransition(solved, null, {
    from: { opacity: 1 },
    update: { opacity: 0 },
  });
 */
  React.useEffect(() => {
    loadNextLevel(dispatch);
  }, [dispatch]);

  return rightAnswer ? (
    <Container>
      <Row className="rounded bg-color-3 flex-column justify-content-center justify-content-md-start flex-md-row">
        <div className="p-3 d-flex justify-content-center">
          <div
            className="rounded quiz-img"
            style={{
              backgroundImage: `url(${
                solved ? rightAnswer.image : secretBird
              })`,
            }}
          />
        </div>
        <div className="p-3 flex-grow-1 text-color-5">
          <ListGroup as="ul" variant="flush">
            <ListGroup.Item action={false} as="div" className="pt-0">
              <h3>{solved ? rightAnswer.name : '******'}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <StyledAudioPlayer
                track={rightAnswer.audio}
                playing
                loop
                pause={solved}
              />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Row>
    </Container>
  ) : (
    <>Загружаемся...</>
  );
};
