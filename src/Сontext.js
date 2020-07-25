import React from 'react';

const GameContext = React.createContext({
  params: { score: 0, level: 0, solved: false, answers: 0 },
  setParams: () => {},
});

const DataContext = React.createContext({
  data: [],
  setData: () => [],
});

export { GameContext, DataContext };
