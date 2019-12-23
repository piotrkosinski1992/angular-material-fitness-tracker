package com.fitnesstracker.backend.app.web.dto;

public class PastExerciseDto {

  private String exerciseName;
  private int timeSpent;
  private int caloriesBurned;
  private String date;
  private String state;

  private PastExerciseDto() {
  }

  public String getExerciseName() {
    return exerciseName;
  }

  public void setExerciseName(String exerciseName) {
    this.exerciseName = exerciseName;
  }

  public int getTimeSpent() {
    return timeSpent;
  }

  public void setTimeSpent(int timeSpent) {
    this.timeSpent = timeSpent;
  }

  public int getCaloriesBurned() {
    return caloriesBurned;
  }

  public void setCaloriesBurned(int caloriesBurned) {
    this.caloriesBurned = caloriesBurned;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }
}
