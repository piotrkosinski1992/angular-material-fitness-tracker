package com.fitnesstracker.backend.app.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class PastExercise {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  private Exercise exercise;

  private State state;
  private LocalDateTime date;

  private PastExercise() {
  }

  public Integer getId() {
    return id;
  }

  public void setExercise(Exercise exercise) {
    this.exercise = exercise;
  }

  public Exercise getExercise() {
    return exercise;
  }

  public State getState() {
    return state;
  }

  public LocalDateTime getDate() {
    return date;
  }
}
