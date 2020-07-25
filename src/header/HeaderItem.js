import React, { useState, useEffect, useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { GameContext, DataContext } from 'Сontext';

const useStyles = makeStyles((theme) => ({
  headerItem: {
    textAlign: 'center',
    border: '1px solid black',
    backgroundColor: (props) => {
      if (props.lvl < props.level) return theme.palette.success.main;
      if (props.lvl === props.level) return theme.palette.warning.main;
      return 'unset';
    },
    flexGrow: 1,
    textAlign: 'center',
    flexBasis: '80px',
  },
}));

function HeaderItem({ level, lvl, children }) {
  const classes = useStyles({ level, lvl });
  return <div className={classes.headerItem}>{children}</div>;
}

export default HeaderItem;
