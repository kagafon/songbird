import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { QuizState, Level } from 'store/root-reducer';
import { LevelTitle } from './LevelTitle';
import Score from './Score';

export interface QuizHeader {
  score: number;
  currentLevel: number;
  levels: Array<string>;
}

export const QuizHeader = (): JSX.Element => {
  const levels = useSelector<QuizState, Array<Level>>((state) => state.levels);

  return (
    <header>
      <div className="header">
        <div className="header__row">
          <div>SongBird</div>
          <Score />
        </div>
        <Segment.Group horizontal size="small">
          {levels.map((x, idx) => (
            <LevelTitle key={x.id} index={idx} name={x.name} />
          ))}
        </Segment.Group>
      </div>
    </header>
  );
};
