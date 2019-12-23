package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.PastExercise;
import java.util.List;

public interface LoadPastExercises {
  List<PastExercise> loadByUsername(String username);

}
