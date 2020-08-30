import * as React from 'react';

import { StyledAudioPlayer } from 'components/AudioPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from 'components/commonTypes';
import { loadNextLevel } from 'store/root-redux';
import { Row, Container } from 'react-bootstrap';

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

  React.useEffect(() => {
    loadNextLevel(dispatch);
  }, [dispatch]);

  return rightAnswer ? (
    <Container>
      <Row className="border-color-2 p-3 rounded bg-color-3 flex-column justify-content-center justify-content-md-start flex-md-row">
        <div className="pr-md-3 d-flex justify-content-center">
          <div
            className="rounded quiz-img"
            style={{
              backgroundImage: `url(${
                solved ? rightAnswer.image : secretBird
              })`,
            }}
          />
        </div>
        <div className="p-0 flex-grow-1 text-color-5 text-center">
          <h3 className="p-3 m-0 text-center text-md-left">
            {solved ? rightAnswer.name : '******'}
          </h3>
          <StyledAudioPlayer track={rightAnswer.audio} loop pause={solved} />
        </div>
      </Row>
    </Container>
  ) : (
    <>Загружаемся...</>
  );
};
