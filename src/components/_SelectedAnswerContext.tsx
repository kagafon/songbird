import * as React from 'react';
import { IAnswer } from 'components/commonTypes';

export interface SelectedAnswerContextType {
  selectedAnswer: IAnswer;
  setSelectedAnswer: (answer: IAnswer) => void;
}

export default React.createContext<SelectedAnswerContextType>(null);


