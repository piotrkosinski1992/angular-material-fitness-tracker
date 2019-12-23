package com.fitnesstracker.backend.app.commons.auth.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

class JwtAuthenticationRequest implements Serializable {

  private static final long serialVersionUID = -8445943548965154778L;

  @JsonProperty("email")
  private String username;
  private String password;

  private JwtAuthenticationRequest() {
  }

  String getUsername() {
    return this.username;
  }

  String getPassword() {
    return this.password;
  }

  void setUsername(String username) {
    this.username = username;
  }

  void setPassword(String password) {
    this.password = password;
  }
}
