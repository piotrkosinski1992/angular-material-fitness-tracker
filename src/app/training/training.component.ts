import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRootReducer from '../app.reducer';
import * as trainingSelectors from './state/training.selectors';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ongoingTraining$: Observable<boolean>;

  constructor(private store: Store<fromRootReducer.State>) {
  }

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(trainingSelectors.hasTrainingStarted);
  }
}
