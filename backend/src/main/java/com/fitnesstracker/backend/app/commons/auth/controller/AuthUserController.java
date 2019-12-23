package com.fitnesstracker.backend.app.commons.auth.controller;

import com.fitnesstracker.backend.app.commons.auth.jwt.TokenGenerator;
import com.fitnesstracker.backend.app.service.RegisterUser;
import java.util.Collection;
import java.util.Objects;
import javax.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/auth")
public class AuthUserController {

  private final AuthenticationManager authenticationManager;
  private final RegisterUser registerUser;
  private final UserMapper mapper;
  private Collection<? extends GrantedAuthority> authorities;

  public AuthUserController(AuthenticationManager authenticationManager, RegisterUser registerUser,
    UserMapper mapper) {
    this.authenticationManager = authenticationManager;
    this.registerUser = registerUser;
    this.mapper = mapper;
  }

  @PostMapping("/login")
  public ResponseEntity<?> createAuthenticationToken(
    @RequestBody JwtAuthenticationRequest authenticationRequest) throws InterruptedException {
    Thread.sleep(500);
    if (!authenticationSucceed(authenticationRequest.getUsername(),
      authenticationRequest.getPassword())) {
      throw new EntityNotFoundException("Wrong username or password!");
    }
    final String token = TokenGenerator.generate(authenticationRequest.getUsername(), authorities);
    return ResponseEntity.ok(new JwtAuthenticationResponse(token));
  }

  @PostMapping("/register")
  public void register(@RequestBody JwtAuthenticationRequest request) throws InterruptedException {
    Thread.sleep(500);
    registerUser.register(mapper.mapToEntity(request));
  }

  private boolean authenticationSucceed(String username, String password) {
    Objects.requireNonNull(username);
    Objects.requireNonNull(password);

    try {
      Authentication authentication = authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(username, password));
      authorities = authentication.getAuthorities();
    } catch (Exception e) {
      return false;
    }
    return true;
  }
}
