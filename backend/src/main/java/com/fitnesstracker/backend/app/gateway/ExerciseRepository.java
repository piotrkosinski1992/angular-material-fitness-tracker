package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.Exercise;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, UUID> {
}
