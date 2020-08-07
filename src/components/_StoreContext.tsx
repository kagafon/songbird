import * as React from 'react';
import { IAnswer } from './commonTypes';

export interface Store {
  selectedAnswer: IAnswer;
}

export interface Action {
  type: string;
  payload: { answer: IAnswer };
}

export const store: Store = {
  selectedAnswer: null,
};

export const reducer = (state: Store, action: Action) => {
  return { ...state, selectedAnswer: action.payload.answer };
};

export interface StoreContextType {
  state: Store;
  dispatch: React.Dispatch<Action>;
}

export const StoreContext = React.createContext<Store>(null);
export const StoreDispatchContext = React.createContext<React.Dispatch<Action>>(
  null
);
