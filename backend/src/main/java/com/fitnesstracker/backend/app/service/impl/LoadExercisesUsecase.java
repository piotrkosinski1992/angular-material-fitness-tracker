package com.fitnesstracker.backend.app.service.impl;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.domain.PastExercise;
import com.fitnesstracker.backend.app.service.LoadExercises;
import com.fitnesstracker.backend.app.service.repo.ExerciseGateway;
import java.util.Set;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
public class LoadExercisesUsecase implements LoadExercises {

  private final ExerciseGateway gateway;

  public LoadExercisesUsecase(ExerciseGateway gateway) {
    this.gateway = gateway;
  }

  @Override
  public Set<Exercise> loadAll() {
    return gateway.loadAll();
  }

  @Override
  public Set<PastExercise> loadPast() {
    return null;
  }

  @Override
  public Exercise loadById(UUID id) {
    return gateway.loadById(id);
  }
}
