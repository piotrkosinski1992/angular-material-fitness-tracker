package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.BaseEntity;
import com.fitnesstracker.backend.app.service.repo.BaseEntityGateway;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class DbBaseEntityGateway implements BaseEntityGateway {

  private final BaseEntityRepository repository;

  public DbBaseEntityGateway(BaseEntityRepository repository) {
    this.repository = repository;
  }

  @Override
  public Optional<BaseEntity> loadByUsername(String username) {
    return repository.findByUsername(username);
  }
}
