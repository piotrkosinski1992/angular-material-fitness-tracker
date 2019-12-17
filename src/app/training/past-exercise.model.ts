export class PastExercise {
  id?: string;
  exerciseId: string;
  name: string;
  timeSpent: number;
  caloriesBurned: number;
  date: Date;
  state: 'completed' | 'cancelled' | null;

  constructor(exerciseId: string, name: string, timeSpent: number, caloriesBurned: number,
              date: Date, state: 'completed' | 'cancelled' | null) {
    this.exerciseId = exerciseId;
    this.name = name;
    this.timeSpent = timeSpent;
    this.caloriesBurned = caloriesBurned;
    this.date = date;
    this.state = state;
  }
}
