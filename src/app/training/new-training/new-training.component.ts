import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../excercise.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import * as fromTrainingReducer from '../state/training.reducer';
import * as trainingSelectors from '../state/training.selectors';
import * as trainingActions from '../state/training.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;

  constructor(private trainingService: TrainingService, private store: Store<fromTrainingReducer.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new trainingActions.TryGetAvailableTrainings());
    this.exercises$ = this.store.select(trainingSelectors.getAvailableExercises);
  }

  onStartTraining(form: NgForm) {
    this.store.dispatch(new trainingActions.StartTraining(form.value.exercise.id));
  }
}
