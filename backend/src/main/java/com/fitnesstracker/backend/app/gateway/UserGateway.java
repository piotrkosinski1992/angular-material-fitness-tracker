package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.User;

public interface UserGateway {
  void register(User user);
}
