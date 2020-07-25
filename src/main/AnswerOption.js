import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  ListItem,
  ListItemText,
} from '@material-ui/core';

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
