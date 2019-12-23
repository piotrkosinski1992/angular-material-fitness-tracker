import {Exercise} from '../excercise.model';
import {PastExercise} from '../past-exercise.model';
import * as fromRootReducer from '../../app.reducer';
import {TrainingActions, TrainingActionTypes} from './training.actions';

export interface TrainingState {
  availableExercises: Exercise[];
  finishedExercises: PastExercise[];
  activeExercise: Exercise;
}

export interface State extends fromRootReducer.State {
  training: TrainingState;
}

export const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeExercise: null
};


export function trainingReducer(state = initialState, actions: TrainingActions) {

  switch (actions.type) {
    case TrainingActionTypes.STOP_TRAINING_SUCCESS: {
      return {
        ...state,
        activeExercise: null
      };
    }

    case TrainingActionTypes.START_TRAINING_SUCCESS: {
      return {
        ...state,
        activeExercise: actions.exercise
      };
    }

    case TrainingActionTypes.GET_AVAILABLE_TRAININGS_SUCCESS: {
      return {
        ...state,
        availableExercises: actions.exercises
      };
    }

    case TrainingActionTypes.GET_FINISHED_TRAININGS_SUCCESS: {
      return {
        ...state,
        finishedExercises: actions.pastExercises
      };
    }

    default: {
      return state;
    }
  }
}

export const getAvailableTrainings = (state: TrainingState) => state.availableExercises;
export const getFinishedTrainings = (state: TrainingState) => state.finishedExercises;
export const getActiveTraining = (state: TrainingState) => state.activeExercise;
export const hasTrainingStarted = (state: TrainingState) => state.activeExercise != null;
