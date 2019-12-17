package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.domain.PastExercise;
import java.util.Set;

public interface LoadExercises {

  Set<Exercise> loadAll();

  Set<PastExercise> loadPast();
}
