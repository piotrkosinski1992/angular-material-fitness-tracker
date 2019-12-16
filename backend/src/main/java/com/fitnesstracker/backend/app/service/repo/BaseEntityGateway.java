package com.fitnesstracker.backend.app.service.repo;

import com.fitnesstracker.backend.app.domain.BaseEntity;
import java.util.Optional;

public interface BaseEntityGateway {

  Optional<BaseEntity> loadByUsername(String username);
}
