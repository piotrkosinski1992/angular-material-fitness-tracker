package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.PastExercise;
import com.fitnesstracker.backend.app.service.repo.PastExerciseGateway;
import org.springframework.stereotype.Service;

@Service
public class DbPastExerciseGateway implements PastExerciseGateway {

  private final PastExerciseRepository repository;

  public DbPastExerciseGateway(PastExerciseRepository repository) {
    this.repository = repository;
  }

  @Override
  public void save(PastExercise exercise) {
    repository.save(exercise);
  }
}
