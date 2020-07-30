// import { createStore } from 'redux';
import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { IAnswer } from './commonTypes';
import { QuizHeader } from './header/QuizHeader';
import { QuestionBlock } from './question/Question';
import { AnswersBlock } from './AnswersBlock';
import sourceData from './data';

const localState = { scoreToAdd: 0 };

const QuizApp = (): JSX.Element => {
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [answers, setAnswers] = React.useState<Array<IAnswer>>();
  const [rightAnswer, setRightAnswer] = React.useState<IAnswer>();
  const [solved, setSolved] = React.useState<boolean>(false);
  const [showResult, setShowResult] = React.useState<boolean>(false);

  React.useEffect((): void => {
    if (level === 0) setScore(0);
    setSolved(false);
    setShowResult(false);
    const newAnswers = [...sourceData[level]];
    setAnswers(newAnswers);
    localState.scoreToAdd = newAnswers.length - 1;
    setRightAnswer(
      newAnswers[Math.floor(Math.random() * (newAnswers.length - 1))]
    );
  }, [level]);

  const restart = React.useCallback(() => setLevel(0), []);

  React.useEffect((): void => {
    if (solved) setScore((s) => s + localState.scoreToAdd);
  }, [solved]);

  const setSelected = React.useCallback(
    (answer: IAnswer) => {
      const checkResult = answer.id === rightAnswer.id;
      if (checkResult) {
        if (!solved) {
          setSolved(checkResult);
        }
      } else {
        localState.scoreToAdd -= 1;
      }
      return solved ? undefined : checkResult;
    },
    [rightAnswer, solved]
  );

  const setNextLevel = React.useCallback(() => {
    if (level + 1 >= sourceData.length) setShowResult(() => true);
    else setLevel(level + 1);
  }, [level]);

  return (
    <>
      <QuizHeader
        score={score}
        currentLevel={level}
        levels={Array(6)
          .fill(1)
          .map((x, idx) => `Уровень ${idx}`)}
      />
      {rightAnswer ? (
        <>
          <QuestionBlock
            title={rightAnswer.name}
            audioUrl={rightAnswer.audio}
            imageUrl={rightAnswer.image}
            solved={solved}
          />
          <Button disabled={!solved} onClick={setNextLevel}>
            Дальше
          </Button>
          <AnswersBlock answers={answers} setSelected={setSelected} />
          {showResult ? (
            <>
              <h3>{`${score} из 30`}</h3>
              <Button onClick={restart}>Заново</Button>
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default QuizApp;
