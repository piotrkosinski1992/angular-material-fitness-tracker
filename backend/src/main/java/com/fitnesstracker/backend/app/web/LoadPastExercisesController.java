package com.fitnesstracker.backend.app.web;

import com.fitnesstracker.backend.app.service.LoadPastExercises;
import com.fitnesstracker.backend.app.web.dto.PastExerciseDto;
import com.fitnesstracker.backend.app.web.dto.PastExerciseMapper;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/exercise/past")
public class LoadPastExercisesController {

  private final PastExerciseMapper mapper = new PastExerciseMapper();
  private final LoadPastExercises loadPastExercises;

  public LoadPastExercisesController(LoadPastExercises loadPastExercises) {
    this.loadPastExercises = loadPastExercises;
  }

  @GetMapping("/all")
  public List<PastExerciseDto> loadFromCurrentUser(Principal principal) throws InterruptedException {
    Thread.sleep(100);
    return loadPastExercises.loadByUsername(principal.getName()).stream()
      .map(mapper::toDto)
      .collect(Collectors.toList());
  }
}
