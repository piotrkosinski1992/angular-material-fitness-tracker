import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TrainingService} from '../training.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {PastExercise} from '../past-exercise.model';
import {Store} from '@ngrx/store';
import * as fromTrainingReducer from '../state/training.reducer';
import * as trainingSelectors from '../state/training.selectors';
import * as trainingActions from '../state/training.actions';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  dataSource = new MatTableDataSource<PastExercise>();
  displayedColumns = ['date', 'exerciseName', 'timeSpent', 'caloriesBurned', 'state'];

  constructor(private trainingService: TrainingService, private store: Store<fromTrainingReducer.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new trainingActions.TryGetFinishedTrainings());
    this.store.select(trainingSelectors.getFinishedExercises)
    .subscribe((pastExercises: PastExercise[]) => this.dataSource.data = pastExercises);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
