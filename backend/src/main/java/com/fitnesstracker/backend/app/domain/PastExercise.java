package com.fitnesstracker.backend.app.domain;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class PastExercise {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  @Transient
  private UUID exerciseId;
  private int caloriesBurned;
  private int timeSpent;
  private State state;
  private LocalDateTime date;

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

  public UUID getExerciseId() {
    return exerciseId;
  }

  void setExerciseId(UUID exerciseId) {
    this.exerciseId = exerciseId;
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
