package com.fitnesstracker.backend.app.domain;

import java.time.LocalDateTime;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PastExercise {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  private String exerciseName;
  private int caloriesBurned;
  private int timeSpent;
  private State state;
  private LocalDateTime date;
  private String username;

  private PastExercise() {
  }

  public Integer getId() {
    return id;
  }

  public int getCaloriesBurned() {
    return caloriesBurned;
  }

  public int getTimeSpent() {
    return timeSpent;
  }

  public State getState() {
    return state;
  }

  public LocalDateTime getDate() {
    return date;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getExerciseName() {
    return exerciseName;
  }

  void setExerciseName(String exerciseName) {
    this.exerciseName = exerciseName;
  }

  void setId(Integer id) {
    this.id = id;
  }

  void setCaloriesBurned(int caloriesBurned) {
    this.caloriesBurned = caloriesBurned;
  }

  void setTimeSpent(int timeSpent) {
    this.timeSpent = timeSpent;
  }

  void setState(State state) {
    this.state = state;
  }

  void setDate(LocalDateTime date) {
    this.date = date;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PastExercise that = (PastExercise) o;
    return id.equals(that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
