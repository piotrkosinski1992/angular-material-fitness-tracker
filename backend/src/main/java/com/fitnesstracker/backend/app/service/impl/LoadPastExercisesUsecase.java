package com.fitnesstracker.backend.app.service.impl;

import com.fitnesstracker.backend.app.domain.PastExercise;
import com.fitnesstracker.backend.app.service.LoadPastExercises;
import com.fitnesstracker.backend.app.service.repo.PastExerciseGateway;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class LoadPastExercisesUsecase implements LoadPastExercises {

  private final PastExerciseGateway gateway;

  public LoadPastExercisesUsecase(PastExerciseGateway gateway) {
    this.gateway = gateway;
  }

  @Transactional
  @Override
  public List<PastExercise> loadByUsername(String username) {
    return gateway.loadByUsername(username);
  }
}
