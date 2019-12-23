export class PastExercise {
  exerciseId: string;
  exerciseName: string;
  timeSpent: number;
  caloriesBurned: number;
  date: Date;
  state: 'completed' | 'cancelled' | null;

  constructor(exerciseName: string, timeSpent: number, caloriesBurned: number,
              date: Date, state: 'completed' | 'cancelled' | null) {
    this.exerciseName = exerciseName;
    this.timeSpent = timeSpent;
    this.caloriesBurned = caloriesBurned;
    this.date = date;
    this.state = state;
  }
}
