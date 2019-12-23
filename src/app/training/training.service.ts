import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PastExercise} from './past-exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private http: HttpClient) {
  }

  fetchAvailableExercises() {
    return this.http.get('/api/exercise/all');
  }

  savePastOrCancelledExercise(pastExercise: PastExercise) {
    return this.http.post('/api/exercise/past/save', pastExercise);
  }

  fetchPastExercises() {
    return this.http.get('api/exercise/past/all');
  }

  fetchExerciseById(exerciseId: string) {
    return this.http.get('/api/exercise/id/' + exerciseId);
  }
}
