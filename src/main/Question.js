import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles(() => ({
  question: {
    display: 'flex',
    width: '100%',
    minHeight: '140px',
    flexWrap: 'wrap',
  },
  image: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '255px',
    backgroundImage: (props) =>
      `url('${
        props.answer && props.solved
          ? props.answer.image
          : 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'
      }')`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    flexGrow: 1,
    minHeight: '140px',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '80%',
    textAlign: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },
}));

function Question({ answer, solved }) {
  const classes = useStyles({ answer, solved });
  return (
    <div className={classes.question}>
      <div className={classes.image}></div>
      <div className={classes.description}>
        <div>{solved ? answer.name : '*****'}</div>
        {answer ? (
          <ReactAudioPlayer src={answer.audio} autoPlay controls loop />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Question;
