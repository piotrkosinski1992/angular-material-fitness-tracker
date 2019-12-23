package com.fitnesstracker.backend.app.domain;

import javax.persistence.Entity;

@Entity
public class User extends BaseEntity {

  public User() {
    super();
  }

  public User(String username, String password) {
    super(username, password);
  }

}
