package com.fitnesstracker.backend.app.web.dto;

public class PastExerciseDto {

  private String exerciseId;
  private String name;
  private int timeSpent;
  private int caloriesBurned;
  private String date;
  private String state;

  private PastExerciseDto() {
  }

  public String getExerciseId() {
    return exerciseId;
  }

  public void setExerciseId(String exerciseId) {
    this.exerciseId = exerciseId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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
