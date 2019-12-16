package com.fitnesstracker.backend;

import com.fitnesstracker.backend.app.domain.Exercise;
import com.fitnesstracker.backend.app.domain.User;
import com.fitnesstracker.backend.app.gateway.ExerciseRepository;
import com.fitnesstracker.backend.app.gateway.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

  private final UserRepository userRepository;
  private final ExerciseRepository exerciseRepository;
  private final PasswordEncoder encoder;

  public BackendApplication(UserRepository userRepository,
    ExerciseRepository exerciseRepository,
    PasswordEncoder encoder) {
    this.userRepository = userRepository;
    this.exerciseRepository = exerciseRepository;
    this.encoder = encoder;
  }

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    userRepository.save(new User("test@gmail.com", encoder.encode("test")));

    exerciseRepository.save(new Exercise("Crunches", 30, 8));
    exerciseRepository.save(new Exercise("Touch-Toes", 180, 15));
    exerciseRepository.save(new Exercise("Side-Lunges", 120, 18));
    exerciseRepository.save(new Exercise("Burpees", 60, 8));
  }
}
