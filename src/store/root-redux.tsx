import { Dispatch } from 'redux';
import { IAnswer } from 'components/commonTypes';
import { DispatchAction, ActionType } from './root-reducer';

export const selectOption = (
  dispatch: Dispatch<DispatchAction>,
  selectedOption: IAnswer
) => dispatch({ type: ActionType.SelectOption, payload: { selectedOption } });

export const loadNextLevel = (dispatch: Dispatch<DispatchAction>) =>
  dispatch({ type: ActionType.LoadNextLevel });
