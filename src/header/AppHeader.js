import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { DataContext } from 'Сontext';
import HeaderItem from './HeaderItem';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '100%',
    flexWrap: 'wrap',
  },
}));

function AppHeader({ level, score }) {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  return (
    <header className={classes.header}>
      <div className={classes.headerRow}>
        <div className={classes.headerItem}>{`Баллы: ${score}`}</div>
      </div>
      <div className={classes.headerRow}>
        {data.map((x, idx) => (
          <HeaderItem key={idx} level={level} lvl={idx}>{`Уровень ${idx}`}</HeaderItem>
        ))}
      </div>
    </header>
  );
}

export default AppHeader;
