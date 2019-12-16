package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.BaseEntity;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BaseEntityRepository extends JpaRepository<BaseEntity, UUID> {

  Optional<BaseEntity> findByUsername(String username);
}
