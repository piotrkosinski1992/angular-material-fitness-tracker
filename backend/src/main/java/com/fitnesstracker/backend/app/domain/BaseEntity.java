package com.fitnesstracker.backend.app.domain;

import java.util.Objects;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BaseEntity {

  @Id
  private UUID id;

  private String username;
  private String password;
  private Role role = Role.USER;

  BaseEntity() {
    id = UUID.randomUUID();
  }

  public BaseEntity(String username, String password) {
    this();
    this.username = username;
    this.password = password;
  }

  public UUID getId() {
    return id;
  }

  public Role getRole() {
    return role;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaseEntity that = (BaseEntity) o;
    return id.equals(that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
