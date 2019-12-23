package com.fitnesstracker.backend.app.commons.auth;


import com.fitnesstracker.backend.app.domain.BaseEntity;
import com.fitnesstracker.backend.app.service.LoadBaseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalDetailsService implements UserDetailsService {

  private final LoadBaseEntity loadBaseEntity;

  public UserPrincipalDetailsService(LoadBaseEntity loadBaseEntity) {
    this.loadBaseEntity = loadBaseEntity;
  }

  @Override
  public UserDetails loadUserByUsername(String username) {
    BaseEntity baseEntity = this.loadBaseEntity.loadByUsername(username)
      .orElseThrow(() -> new RuntimeException("user with username not found: " + username));
    return new UserPrincipal(baseEntity);
  }
}
