import React, { useState, useEffect } from 'react';
import {

  makeStyles,
  List,
} from '@material-ui/core';
import AnswerDetails from './AnswerDetails';
import AnswerOption from './AnswerOption';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '30%',
  },
  answerDescription: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '70%',
  },
}));

function AnswerBlock({ answers, checkAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const classes = useStyles({ selectedOption });

  useEffect(() => {
    setSelectedOption(null);
  }, [answers]);

  return (
    <div className={classes.wrapper}>
      <List component="div" className={classes.answers}>
        {answers.map((x, idx) => (
          <AnswerOption
            key={idx}
            option={x}
            checkOption={(option, result) => {
              setSelectedOption(option);
              if (result === undefined) {
                return checkAnswer(option);
              }
              return undefined;
            }}
            idx={idx}
          />
        ))}
      </List>
      <div className={classes.answerDescription}>
        {selectedOption ? (
          <AnswerDetails answer={selectedOption} />
        ) : (
          'Послушайте плеер.Выберите птицу из списка'
        )}
      </div>
    </div>
  );
}

export default AnswerBlock;
