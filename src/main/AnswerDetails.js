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

const useStyles = makeStyles(() => ({
  answerDescriptionRow: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'stretch',
  },
  answerImage: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '40%',
    backgroundImage: (props) =>
      `url('${props.answer ? props.answer.image : ''}')`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  },
  answerTitle: {
    flexBasis: '60%',
    justifyContent: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function AnswerDetails({ answer }) {
  const classes = useStyles({ answer });
  return (
    <React.Fragment>
      <div className={classes.answerDescriptionRow}>
        <div className={classes.answerImage}></div>
        <div className={classes.answerTitle}>
          <div>{answer.name}</div>
          <div>{answer.species}</div>
          <ReactAudioPlayer src={answer.audio} controls />
        </div>
      </div>

      <div className={classes.answerDescriptionRow}>
        {answer.description}
      </div>
    </React.Fragment>
  );
}

export default AnswerDetails;
