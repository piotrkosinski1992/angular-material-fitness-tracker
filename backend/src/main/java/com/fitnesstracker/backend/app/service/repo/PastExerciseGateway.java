package com.fitnesstracker.backend.app.service.repo;

import com.fitnesstracker.backend.app.domain.PastExercise;

public interface PastExerciseGateway {
    void save(PastExercise pastExercise);
}
