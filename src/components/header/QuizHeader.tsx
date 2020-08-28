import * as React from 'react';
// import { Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { QuizState, Level } from 'store/root-reducer';
import { Pagination } from 'react-bootstrap';
import Logo from 'components/Logo';
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
      <div className="d-flex flex-column mt-1">
        <div className="d-flex justify-content-between align-items-center p-1">
          <Logo />
          <Score />
        </div>
        <Pagination className="d-flex justify-content-stretch flex-wrap">
          {levels.map((x, idx) => (
            <LevelTitle key={x.id} index={idx} name={x.name} />
          ))}
        </Pagination>
      </div>
    </header>
  );
};
