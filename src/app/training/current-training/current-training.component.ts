import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StopTrainingComponent} from './stop-training.component';
import {Exercise} from '../excercise.model';
import * as fromTrainingReducer from '../state/training.reducer';
import * as trainingSelectors from '../state/training.selectors';
import * as trainingActions from '../state/training.actions';
import {Store} from '@ngrx/store';
import {PastExercise} from '../past-exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;
  exercise: Exercise;

  constructor(private dialog: MatDialog, private store: Store<fromTrainingReducer.State>) {
  }

  ngOnInit() {
    this.store.select(trainingSelectors.getActiveExercise).subscribe(result => this.exercise = result);
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.exercise.duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.store.dispatch(new trainingActions.StopTraining(new PastExercise(
          this.exercise.name,
          this.exercise.duration,
          this.exercise.calories,
          new Date(),
          'completed'
        )));
        clearInterval(this.timer);
      }
    }, step);
  }

  onStopTimer() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data: {progress: this.progress}});

    dialogRef.afterClosed().subscribe((stopTraining: boolean) => {
      if (stopTraining) {
        this.store.dispatch(new trainingActions.StopTraining(
          new PastExercise(
            this.exercise.name,
            this.exercise.duration * (this.progress / 100),
            this.exercise.calories * (this.progress / 100),
            new Date(),
            'cancelled'
          )));
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
