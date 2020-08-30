import { createStore } from 'redux';
import { DispatchAction, QuizState, rootReducer } from './root-reducer';

export default createStore<QuizState, DispatchAction, null, null>(rootReducer);
