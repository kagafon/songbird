import * as React from 'react';
import { Item, Container, Button } from 'semantic-ui-react';

import { AudioPlayer } from 'components/AudioPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { QuizState } from 'store/root-reducer';
import { IAnswer } from 'components/commonTypes';
import { loadNextLevel } from 'store/root-redux';

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
  const solved = useSelector<QuizState, boolean>((state) => state.solved);
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadNextLevel(dispatch);
  }, [dispatch]);

  return rightAnswer ? (
    <>
      <Container>
        <Item>
          <Item.Image size="small" src={rightAnswer.image} />

          <Item.Content>
            <Item.Header>
              {solved ? rightAnswer.name : '****************'}
            </Item.Header>
          </Item.Content>
          <Item.Description>
            <AudioPlayer track={rightAnswer.audio} playing pause={solved} />
          </Item.Description>
        </Item>
      </Container>
      <Button disabled={!solved} onClick={() => loadNextLevel(dispatch)}>
        Дальше
      </Button>
    </>
  ) : (
    <>Загружаемся...</>
  );
};
