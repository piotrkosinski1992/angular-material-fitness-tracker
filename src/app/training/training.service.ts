import {Injectable} from '@angular/core';
import {Exercise} from './excercise.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<boolean>();
  private availableExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
    {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
  ];
  private runningExercise: Exercise;
  private pastExercises: Exercise[] = [];

  constructor() {
  }

  getExercises(): Exercise[] {
    return this.availableExercises.slice();
  }

  getPastExercises(): Exercise[] {
    return this.pastExercises.slice();
  }

  cancelExercise(progress: number) {
    this.pastExercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'cancelled',
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
    });
    this.runningExercise = null;
    this.exerciseChanged.next(false);
  }

  completeExercise() {
    this.pastExercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(false);
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

  startExercise(id: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === id);
    this.exerciseChanged.next(true);
  }
}
