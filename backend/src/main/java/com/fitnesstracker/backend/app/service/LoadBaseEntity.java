package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.BaseEntity;
import java.util.Optional;

public interface LoadBaseEntity {
  Optional<BaseEntity> loadByUsername(String username);
}
