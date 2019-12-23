package com.fitnesstracker.backend.app.service.impl;

import com.fitnesstracker.backend.app.domain.User;
import com.fitnesstracker.backend.app.gateway.UserGateway;
import com.fitnesstracker.backend.app.service.LoadBaseEntity;
import com.fitnesstracker.backend.app.service.RegisterUser;
import org.springframework.stereotype.Service;

@Service
public class RegisterUserUsecase implements RegisterUser {

  private final UserGateway gateway;
  private final LoadBaseEntity loadBaseEntity;

  public RegisterUserUsecase(UserGateway gateway,
    LoadBaseEntity loadBaseEntity) {
    this.gateway = gateway;
    this.loadBaseEntity = loadBaseEntity;
  }

  @Override
  public void register(User user) {
    if (loadBaseEntity.loadByUsername(user.username()).isPresent()) {
      throw new RuntimeException("user with given email already exist inside DB");
    }
    gateway.register(user);
  }
}
