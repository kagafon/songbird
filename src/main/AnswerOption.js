import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { GameContext, DataContext } from 'Сontext';
import ReactAudioPlayer from 'react-audio-player';
import AnswerDetails from './AnswerDetails';

const useStyles = makeStyles((theme) => ({
  option: {
    color: (props) => {
      if (props.result !== undefined) {
        if (props.result) {
          return theme.palette.success.main;
        }
        return theme.palette.error.main;
      }
      return 'unset';
    },
  },
}));

function AnswerOption({ option, checkOption }) {
  const [result, setResult] = useState();
  const classes = useStyles({ result });

  useEffect(() => {
    setResult();
  }, [option]);

  return (
    <ListItem
      button
      onClick={() => {
        const checkResult = checkOption(option, result);
        if (checkResult !== undefined) {
          setResult(checkResult);
        }
      }}
      className={classes.option}
    >
      <ListItemText primary={option.name} />
    </ListItem>
  );
}

export default AnswerOption;
