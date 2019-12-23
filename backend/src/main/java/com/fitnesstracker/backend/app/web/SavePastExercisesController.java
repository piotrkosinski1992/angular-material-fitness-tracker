package com.fitnesstracker.backend.app.web;

import com.fitnesstracker.backend.app.service.SavePastExercises;
import com.fitnesstracker.backend.app.web.dto.PastExerciseDto;
import com.fitnesstracker.backend.app.web.dto.PastExerciseMapper;
import java.security.Principal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/exercise/past")
public class SavePastExercisesController {

  private final PastExerciseMapper mapper = new PastExerciseMapper();
  private final SavePastExercises savePastExercises;

  public SavePastExercisesController(SavePastExercises savePastExercises) {
    this.savePastExercises = savePastExercises;
  }

  @PostMapping("/save")
  public void save(@RequestBody PastExerciseDto dto, Principal principal) {
    savePastExercises.save(mapper.toEntity(dto), principal.getName());
  }
}
