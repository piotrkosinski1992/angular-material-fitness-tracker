package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.BaseEntity;

public interface LoadBaseEntity {
  BaseEntity loadByUsername(String username);
}
