package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.domain.PastExercise;
import java.util.Set;
import java.util.UUID;

public interface LoadExercises {

  Set<Exercise> loadAll();

  Set<PastExercise> loadPast();

  Exercise loadById(UUID fromString);
}
