package com.fitnesstracker.backend.app.domain;

import java.util.Objects;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Exercise {

  @Id
  private UUID id;
  private String name;
  private int duration;
  private int calories;

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
