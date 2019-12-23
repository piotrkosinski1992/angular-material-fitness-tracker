import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Router} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as trainingActions from './training.actions';
import {StartTraining, StopTraining, TrainingActionTypes} from './training.actions';
import {TrainingService} from '../training.service';
import {Exercise} from '../excercise.model';
import {PastExercise} from '../past-exercise.model';

@Injectable()
export class TrainingEffects {

  constructor(private actions$: Actions, private router: Router,
              private trainingService: TrainingService) {
  }

  @Effect()
  savePastExercise: Observable<Action> = this.actions$.pipe(ofType(TrainingActionTypes.STOP_TRAINING),
    mergeMap((actionInput: StopTraining) => this.trainingService.savePastOrCancelledExercise(actionInput.pastExercise).pipe(
      map(() => {
        return new trainingActions.StopTrainingSuccess();
      }, catchError(error => {
        return EMPTY;
      }))
    )));

  @Effect()
  startTraining: Observable<Action> = this.actions$.pipe(ofType(TrainingActionTypes.START_TRAINING),
    mergeMap((actionInput: StartTraining) => this.trainingService.fetchExerciseById(actionInput.exerciseId).pipe(
      map((exercise: Exercise) => {
        return new trainingActions.StartTrainingSuccess(exercise);
      }, catchError(error => {
        return EMPTY;
      }))
    )));

  @Effect()
  getAvailableExercises: Observable<Action> = this.actions$.pipe(ofType(TrainingActionTypes.TRY_GET_AVAILABLE_TRAININGS),
    mergeMap(() => this.trainingService.fetchAvailableExercises().pipe(
      map((exercises: Exercise[]) => {
        return new trainingActions.GetAvailableTrainingsSuccess(exercises);
      }, catchError(error => {
        return EMPTY;
      }))
    )));

  @Effect()
  getFinishedExercises: Observable<Action> = this.actions$.pipe(ofType(TrainingActionTypes.TRY_GET_FINISHED_TRAININGS),
    mergeMap(() => this.trainingService.fetchPastExercises().pipe(
      map((pastExercises: PastExercise[]) => {
        return new trainingActions.GetFinishedTrainingsSuccess(pastExercises);
      }, catchError(error => {
        return EMPTY;
      }))
    )));
}
