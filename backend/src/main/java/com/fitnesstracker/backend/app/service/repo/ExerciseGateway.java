package com.fitnesstracker.backend.app.service.repo;

import com.fitnesstracker.backend.app.domain.Exercise;
import java.util.Set;
import java.util.UUID;

public interface ExerciseGateway {

  Set<Exercise> loadAll();

  Exercise loadById(UUID id);
}
