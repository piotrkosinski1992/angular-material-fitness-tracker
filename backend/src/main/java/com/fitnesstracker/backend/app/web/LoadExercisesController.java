package com.fitnesstracker.backend.app.web;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.domain.PastExercise;
import com.fitnesstracker.backend.app.service.LoadExercises;
import java.security.Principal;
import java.util.List;
import java.util.Set;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/exercise")
public class LoadExercisesController {

  private final LoadExercises loadExercises;

  public LoadExercisesController(LoadExercises loadExercises) {
    this.loadExercises = loadExercises;
  }

  @GetMapping("/all")
  public Set<Exercise> loadAll() {
    return loadExercises.loadAll();
  }

  @GetMapping("/past/all")
  public List<PastExercise> loadPastFromCurrentUser(Principal principal) {
    return null;
  }
}
