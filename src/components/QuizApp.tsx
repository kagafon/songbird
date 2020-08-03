import * as React from 'react';
import { Provider } from 'react-redux';

import store from 'store/index';
import { QuizHeader } from './header/QuizHeader';
import { QuestionBlock } from './question/Question';
import AnswersBlock from './AnswersBlock';

const QuizApp = (): JSX.Element => {
  return (
    <Provider store={store}>
      <QuizHeader />
      <QuestionBlock />
      <AnswersBlock />
    </Provider>
  );
};

export default QuizApp;
