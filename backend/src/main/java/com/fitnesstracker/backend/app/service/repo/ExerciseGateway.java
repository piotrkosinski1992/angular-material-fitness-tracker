package com.fitnesstracker.backend.app.service.repo;

import com.fitnesstracker.backend.app.domain.Exercise;
import java.util.Set;

public interface ExerciseGateway {

  Set<Exercise> loadAll();
}
