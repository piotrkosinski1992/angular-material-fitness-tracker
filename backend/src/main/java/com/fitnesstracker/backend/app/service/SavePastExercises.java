package com.fitnesstracker.backend.app.service;

import com.fitnesstracker.backend.app.domain.PastExercise;

public interface SavePastExercises {

  void save(PastExercise exercise, String username);
}
