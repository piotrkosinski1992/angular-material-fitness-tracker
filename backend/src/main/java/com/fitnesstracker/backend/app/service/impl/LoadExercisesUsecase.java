package com.fitnesstracker.backend.app.service.impl;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.service.LoadExercises;
import com.fitnesstracker.backend.app.service.repo.ExerciseGateway;
import java.util.Set;
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
}
