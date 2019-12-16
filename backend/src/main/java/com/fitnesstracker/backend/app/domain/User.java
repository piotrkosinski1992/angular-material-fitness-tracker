package com.fitnesstracker.backend.app.domain;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class User extends BaseEntity {

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "USER_ID")
  private List<PastExercise> pastExercises = new ArrayList<>();

  public User() {
    super();
  }

  public User(String username, String password) {
    super(username, password);
  }

  public List<PastExercise> getPastExercises() {
    return Collections.unmodifiableList(pastExercises);
  }
}
