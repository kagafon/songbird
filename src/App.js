import React, { useState, useCallback, useEffect } from 'react';
import {
  Button,
  makeStyles,
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
} from '@material-ui/core';

import './App.css';

import { GameContext, DataContext } from './Сontext';
import AppHeader from './header/AppHeader';
import sourceData from 'data';
import Question from './main/Question';
import AnswerBlock from './main/AnswerBlock';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: '0 auto',
  },
}));

function App() {
  const classes = useStyles();
  const [params, setParams] = useState({
    score: 0,
    level: 0,
    answers: 0,
  });
  const [currentAnswer, setCurrentAnswer] = useState(
    sourceData[params.level][0]
  );
  const [solved, setSolved] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreToAdd, setScoreToAdd] = useState();

  useEffect(() => {
    if (level < sourceData.length) {
      setAnswers([...sourceData[level]].sort(() => Math.random() - 0.5));
      setCurrentAnswer(
        sourceData[level][
          Math.floor(Math.random() * (sourceData[level].length - 1))
        ]
      );
      setSolved(false);
      setScoreToAdd(sourceData[level].length - 1);
    }
  }, [level]);

  const loadNextLevel = useCallback((lvl) => {
    setLevel(lvl);
  }, []);

  const [data, setData] = useState(sourceData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <GameContext.Provider value={{ params, setParams }}>
        <div className={classes.wrapper}>
          <AppHeader level={level} score={score} />
          <Question answer={currentAnswer} solved={solved} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            disabled={!solved}
            onClick={() => {
              setScore(score + scoreToAdd);
              loadNextLevel(level + 1);
            }}
          >
            Дальше
          </Button>

          <AnswerBlock
            answers={answers}
            checkAnswer={
              solved
                ? () => undefined
                : (answer) => {
                    const checkResult = answer.id === currentAnswer.id;
                    if (!checkResult) setScoreToAdd(scoreToAdd - 1);
                    setSolved(checkResult);
                    return checkResult;
                  }
            }
          />
        </div>
        <Dialog open={level === sourceData.length}>
          <DialogTitle>Результат</DialogTitle>
          <Typography variant="h2">{`${score} из ${sourceData.reduce(
            (acc, x) => acc + x.length - 1,
            0
          )}`}</Typography>
          <DialogActions>
            <Button
              onClick={() => {
                setScore(0);
                setLevel(0);
              }}
            >
              Заново
            </Button>
          </DialogActions>
        </Dialog>
      </GameContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
