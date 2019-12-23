import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTraining from '../../training/state/training.reducer';


export const getTrainingState = createFeatureSelector<fromTraining.TrainingState>('training');
export const getAvailableExercises = createSelector(getTrainingState, fromTraining.getAvailableTrainings);
export const getFinishedExercises = createSelector(getTrainingState, fromTraining.getFinishedTrainings);
export const getActiveExercise = createSelector(getTrainingState, fromTraining.getActiveTraining);
export const hasTrainingStarted = createSelector(getTrainingState, fromTraining.hasTrainingStarted);
