package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.User;
import org.springframework.stereotype.Service;

@Service
public class DbUserGateway implements UserGateway {

  private final UserRepository userRepository;

  public DbUserGateway(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public void register(User user) {
    userRepository.save(user);
  }
}
