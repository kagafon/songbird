import * as React from 'react';
import { Provider } from 'react-redux';

import store from 'store/index';
import { Container } from 'react-bootstrap';
import { QuizHeader } from './header/QuizHeader';
import { QuestionBlock } from './question/Question';
import AnswersBlock from './AnswersBlock';
import ResultsModal from './ResultsModal';

const QuizApp = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Container>
        <QuizHeader />
        <QuestionBlock />
        <AnswersBlock />
        <ResultsModal />
      </Container>
    </Provider>
  );
};

export default QuizApp;
