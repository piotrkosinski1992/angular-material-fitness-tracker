import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../excercise.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getPastExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
