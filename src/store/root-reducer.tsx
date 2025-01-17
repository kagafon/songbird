import { Action, Reducer } from 'redux';
import { IAnswer } from 'components/commonTypes';
import sourceData from 'data/data';

const preloadedImages: Record<string, HTMLImageElement> = {};

export interface Level {
  id: number;
  name: string;
}

export interface QuizState {
  selectedOption: IAnswer;
  score: number;
  scoreToAdd: number;
  level: number;
  maxLevel: number;
  answers: Array<IAnswer>;
  levels: Array<Level>;
  rightAnswer: IAnswer;
  solved: boolean;
  checkedState: Record<number, boolean>;
  levelStates: Record<number, boolean>;
  finished: boolean;
  maxScore: number;
  secretBird: string;
}

export const QuizState: QuizState = {
  selectedOption: null,
  score: 0,
  scoreToAdd: 0,
  level: -1,
  answers: [],
  levels: sourceData.map((x) => ({ id: x.id, name: x.name })),
  maxLevel: sourceData.length - 1,
  rightAnswer: null,
  solved: false,
  checkedState: {},
  levelStates: {},
  finished: false,
  maxScore: sourceData.reduce((acc, x) => acc + x.items.length - 1, 0),
  secretBird: 'assets/images/secretBird.jpg',
};

export interface DispatchAction extends Action {
  payload?: Partial<QuizState>;
}

export enum ActionType {
  SelectOption,
  LoadNextLevel,
}

export const rootReducer: Reducer<QuizState, DispatchAction> = (
  state = QuizState,
  action
) => {
  switch (action.type) {
    case ActionType.SelectOption: {
      if (state.solved) {
        return {
          ...state,
          selectedOption: action.payload.selectedOption,
        };
      }
      const solved =
        state.solved ||
        (state.rightAnswer &&
          action.payload.selectedOption.id === state.rightAnswer.id);

      return {
        ...state,
        selectedOption: action.payload.selectedOption,
        solved,
        scoreToAdd: solved
          ? state.scoreToAdd
          : state.scoreToAdd -
            (state.checkedState[action.payload.selectedOption.id] === undefined
              ? 1
              : 0),
        score: solved ? state.score + state.scoreToAdd : state.score,
        checkedState: {
          ...state.checkedState,
          [action.payload.selectedOption.id]: solved,
        },
      };
    }

    case ActionType.LoadNextLevel: {
      const level =
        action.payload?.level === undefined
          ? state.level + 1
          : action.payload.level;
      if (level >= sourceData.length) {
        return { ...state, finished: true };
      }
      sourceData[level].items.forEach((x) => {
        if (!preloadedImages[x.image]) {
          const image = new Image();
          image.src = x.image;
          preloadedImages[x.image] = image;
        }
      });
      const answers = [...sourceData[level].items].sort(
        () => Math.random() - 0.5
      );
      const rightAnswer =
        answers[Math.floor(Math.random() * (answers.length - 1))];

      // eslint-disable-next-line no-console
      console.log(`Cheater mode: try ${rightAnswer.name}`);

      return {
        ...state,
        answers,
        scoreToAdd: answers.length - 1,
        score: level === 0 ? 0 : state.score,
        rightAnswer,
        solved: false,
        checkedState: {},
        level,
        selectedOption: null,
        levelStates: {
          ...(level ? state.levelStates : {}),
          [level - 1]: false,
          [level]: true,
        },
        finished: false,
      };
    }
    default:
      return state;
  }
};
