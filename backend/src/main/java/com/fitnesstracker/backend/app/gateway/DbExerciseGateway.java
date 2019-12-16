package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.service.repo.ExerciseGateway;
import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Service;

@Service
public class DbExerciseGateway implements ExerciseGateway {

  private final ExerciseRepository repository;

  public DbExerciseGateway(ExerciseRepository repository) {
    this.repository = repository;
  }

  @Override
  public Set<Exercise> loadAll() {
    return new HashSet<>(repository.findAll());
  }
}
