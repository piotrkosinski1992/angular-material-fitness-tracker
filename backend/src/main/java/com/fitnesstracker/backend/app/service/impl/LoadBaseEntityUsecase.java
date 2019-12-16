package com.fitnesstracker.backend.app.service.impl;

import com.fitnesstracker.backend.app.domain.BaseEntity;
import com.fitnesstracker.backend.app.service.LoadBaseEntity;
import com.fitnesstracker.backend.app.service.repo.BaseEntityGateway;
import org.springframework.stereotype.Service;

@Service
public class LoadBaseEntityUsecase implements LoadBaseEntity {

  private final BaseEntityGateway gateway;

  public LoadBaseEntityUsecase(BaseEntityGateway gateway) {
    this.gateway = gateway;
  }

  @Override
  public BaseEntity loadByUsername(String username) {
    return gateway.loadByUsername(username).orElseThrow(() -> new RuntimeException("user with username not found: "+ username));
  }
}
