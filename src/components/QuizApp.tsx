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
        <Container>
          <NextLevelButton />
        </Container>
      </Container>
      <footer>
        <small className="text-left">
          Font made from{' '}
          <a className="link" href="http://www.onlinewebfonts.com">oNline Web Fonts</a>{' '}
          licensed by CC BY 3.0
        </small>
      </footer>
    </Provider>
  );
};

export default QuizApp;
