package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.PastExercise;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PastExerciseRepository extends JpaRepository<PastExercise, UUID> {

}
