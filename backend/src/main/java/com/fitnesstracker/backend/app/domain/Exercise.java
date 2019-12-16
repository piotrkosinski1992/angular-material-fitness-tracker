package com.fitnesstracker.backend.app.domain;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Exercise {

  @Id
  private UUID id;
  private String name;
  private int duration;
  private int calories;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "EXERCISE_ID")
  private List<PastExercise> pastExercises;

  private Exercise() {
    id = UUID.randomUUID();
  }

  public Exercise(String name, int duration, int calories) {
    this();
    this.name = name;
    this.duration = duration;
    this.calories = calories;
  }

  public UUID getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getDuration() {
    return duration;
  }

  public int getCalories() {
    return calories;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Exercise exercise = (Exercise) o;
    return id.equals(exercise.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
