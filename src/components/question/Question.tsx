/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Item, Container } from 'semantic-ui-react';

import { AudioPlayer } from 'components/AudioPlayer';

export interface QuestionBlockProps {
  title: string;
  imageUrl: string;
  audioUrl: string;
  solved: boolean;
}

export const QuestionBlock = ({
  title,
  imageUrl,
  audioUrl,
  solved,
}: QuestionBlockProps): JSX.Element => {
  return (
    <Container>
      <Item>
        <Item.Image size="small" src={imageUrl} />

        <Item.Content>
          <Item.Header>{solved ? title : '****************'}</Item.Header>
        </Item.Content>
        <Item.Description>
          <AudioPlayer track={audioUrl} playing pause={solved} />
        </Item.Description>
      </Item>
    </Container>
  );
};
