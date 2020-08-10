import * as React from 'react';
import { Provider } from 'react-redux';

import store from 'store/index';
import { Container } from 'react-bootstrap';
import { QuizHeader } from './header/QuizHeader';
import { QuestionBlock } from './question/Question';
import AnswersBlock from './AnswersBlock';
import ResultsModal from './ResultsModal';
import { NextLevelButton } from './NextLevelButton';

const QuizApp = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Container>
        <QuizHeader />
        <QuestionBlock />
        <AnswersBlock />
        <ResultsModal />
        <NextLevelButton />
      </Container>
    </Provider>
  );
};

export default QuizApp;
