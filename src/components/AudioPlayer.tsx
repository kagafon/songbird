/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Statistic, Step, Icon, Segment, Container } from 'semantic-ui-react';

export interface AudioPlayerProps {
  track: string;
  playing: boolean;
  pause: boolean;
}

export const AudioPlayer = ({
  track,
  playing,
  pause,
}: AudioPlayerProps): JSX.Element => {
  return <Container>HERE IS audio player</Container>;
};
