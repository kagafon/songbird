/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Statistic, Step, Icon, Segment } from 'semantic-ui-react';
//import { Score } from './Score';
import { LevelTitle } from './LevelTitle';

export interface QuizHeader {
  score: number;
  currentLevel: number;
  levels: Array<string>;
}

export const QuizHeader = ({
  score,
  levels,
  currentLevel,
}: QuizHeader): JSX.Element => {
  return (
    <header>
      <div className="header">
        <div className="header__row">
          <div>SongBird</div>
          <Statistic size="mini">
            <Statistic.Value>{score}</Statistic.Value>
            <Statistic.Label>баллы</Statistic.Label>
          </Statistic>
        </div>
        <Segment.Group horizontal size="small">
          {levels.map((x, idx) => (
            <Segment
              inverted
              textAlign="center"
              key={idx}
              color={currentLevel === idx ? 'green' : 'grey'}
              disabled={currentLevel < idx}
            >
              {x}
            </Segment>
          ))}
        </Segment.Group>
      </div>
    </header>
  );
};
