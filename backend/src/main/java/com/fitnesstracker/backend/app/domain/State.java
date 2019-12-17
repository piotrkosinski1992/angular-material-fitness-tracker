package com.fitnesstracker.backend.app.domain;

public enum State {
  completed("completed"), cancelled("cancelled");

  private String value;

  State(String value) {
    this.value = value;
  }
}
