package com.fitnesstracker.backend.app.commons.auth.controller;

import com.fitnesstracker.backend.app.domain.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

  private final PasswordEncoder encoder;

  public UserMapper(PasswordEncoder encoder) {
    this.encoder = encoder;
  }

  public User mapToEntity(JwtAuthenticationRequest request) {
    return new User(request.getUsername(), encoder.encode(request.getPassword()));
  }
}
