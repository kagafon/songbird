// import { createStore } from 'redux';
import * as React from 'react';

import { IAnswer } from 'components/commonTypes';
import { QuizHeader } from './header/QuizHeader';
import { QuestionBlock } from './question/Question';
import { AnswersBlock } from './AnswersBlock';
import sourceData from './data';

/* function updateStore(state = { selectedAnswer: null, score: 0 }, action) {
  switch (action.type) {
    case 'SetSelectedAnswer':
      return { ...state, selectedAnswer: action.value };
    default:
      return state;
  }
} */

// let store = createStore(updateStore);

const QuizApp = (): JSX.Element => {
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [scoreToAdd, setscoreToAdd] = React.useState(0);
  const [answers, setAnswers] = React.useState<Array<IAnswer>>();
  const [rightAnswer, setRightAnswer] = React.useState<IAnswer>();
  const [solved, setSolved] = React.useState<boolean>(false);

  React.useEffect((): void => {
    setSolved(false);
    const newAnswers = [...sourceData[level]];
    setAnswers(newAnswers);
    setRightAnswer(
      newAnswers[Math.floor(Math.random() * (newAnswers.length - 1))]
    );
  }, [level]);

  const setSelected = React.useCallback(
    (answer: IAnswer) => {
      const checkResult = answer.id === rightAnswer.id;
      //if (!solved && checkResult !== solved) setSolved(checkResult);
      return checkResult;
    },
    [rightAnswer, solved]
  );

  return (
    <>
      <QuizHeader
        score={score}
        currentLevel={2}
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
          <AnswersBlock answers={answers} setSelected={setSelected} />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default QuizApp;
