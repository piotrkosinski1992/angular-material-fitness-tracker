import {Action} from '@ngrx/store';
import {Exercise} from '../excercise.model';
import {PastExercise} from '../past-exercise.model';

export enum TrainingActionTypes {
  TRY_GET_AVAILABLE_TRAININGS = '[TRAINING] get available trainings',
  GET_AVAILABLE_TRAININGS_SUCCESS = '[TRAINING] available trainings success',
  TRY_GET_FINISHED_TRAININGS = '[TRAINING] get FINISHED trainings',
  GET_FINISHED_TRAININGS_SUCCESS = '[TRAINING] FINISHED trainings success',
  START_TRAINING = '[TRAINING] start training',
  START_TRAINING_SUCCESS = '[TRAINING] start training SUCCESS',
  STOP_TRAINING = '[TRAINING] stop training',
  STOP_TRAINING_SUCCESS = '[TRAINING] stop training SUCCESS'
}

export class StartTrainingSuccess implements Action {
  readonly type = TrainingActionTypes.START_TRAINING_SUCCESS;

  constructor(public exercise: Exercise) {
  }
}

export class StopTraining implements Action {
  readonly type = TrainingActionTypes.STOP_TRAINING;
  constructor(public pastExercise: PastExercise) {
  }
}

export class StopTrainingSuccess implements Action {
  readonly type = TrainingActionTypes.STOP_TRAINING_SUCCESS;
}

export class StartTraining implements Action {
  readonly type = TrainingActionTypes.START_TRAINING;

  constructor(public exerciseId: string) {
  }
}

export class TryGetAvailableTrainings implements Action {
  readonly type = TrainingActionTypes.TRY_GET_AVAILABLE_TRAININGS;
}

export class GetAvailableTrainingsSuccess implements Action {
  readonly type = TrainingActionTypes.GET_AVAILABLE_TRAININGS_SUCCESS;

  constructor(public exercises: Exercise[]) {
  }
}

export class TryGetFinishedTrainings implements Action {
  readonly type = TrainingActionTypes.TRY_GET_FINISHED_TRAININGS;
}

export class GetFinishedTrainingsSuccess implements Action {
  readonly type = TrainingActionTypes.GET_FINISHED_TRAININGS_SUCCESS;

  constructor(public pastExercises: PastExercise[]) {
  }
}

export type TrainingActions =
  TryGetAvailableTrainings |
  GetAvailableTrainingsSuccess |
  TryGetFinishedTrainings |
  GetFinishedTrainingsSuccess |
  StartTraining |
  StartTrainingSuccess |
  StopTraining |
  StopTrainingSuccess;

