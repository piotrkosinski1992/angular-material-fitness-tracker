import {Injectable} from '@angular/core';
import {Exercise} from './excercise.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PastExercise} from './past-exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exercisesChanged = new Subject<Exercise[]>();
  exerciseChanged = new Subject<boolean>();
  pastExercisesChanged = new Subject<PastExercise[]>();
  private availableExercises: Exercise[] = [];
  private runningExercise: Exercise;

  constructor(private http: HttpClient) {
  }

  fetchAvailableExercises() {
    this.http.get('/api/exercise/all').subscribe((exercises: Exercise[]) => {
      this.availableExercises = exercises;
      this.exercisesChanged.next([...exercises]);
    });
  }

  savePastOrCancelledExercise(pastExercise: PastExercise) {
    this.http.post('/api/exercise/past/save', pastExercise).subscribe();
  }

  fetchPastExercises() {
    this.http.get('api/exercise/past/all').subscribe((
      pastExercises: PastExercise[]) => this.pastExercisesChanged.next(pastExercises));
  }

  cancelExercise(progress: number) {
    this.savePastOrCancelledExercise(new PastExercise(
      this.runningExercise.name,
      this.runningExercise.duration * (progress / 100),
      this.runningExercise.calories * (progress / 100),
      new Date(),
      'cancelled'
    ));
    this.runningExercise = null;
    this.exerciseChanged.next(false);
  }

  completeExercise() {
    this.savePastOrCancelledExercise(new PastExercise(
      this.runningExercise.name,
      this.runningExercise.duration,
      this.runningExercise.calories,
      new Date(),
      'completed'
    ));
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
