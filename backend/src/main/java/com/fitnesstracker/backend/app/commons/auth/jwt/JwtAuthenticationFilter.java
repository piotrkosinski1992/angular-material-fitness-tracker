package com.fitnesstracker.backend.app.commons.auth.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fitnesstracker.backend.app.domain.BaseEntity;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

  private AuthenticationManager authenticationManager;

  public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  @Override
  public Authentication attemptAuthentication(HttpServletRequest request,
    HttpServletResponse response) throws AuthenticationException {

    BaseEntity credentials = null;

    try {
      credentials = new ObjectMapper().readValue(request.getInputStream(), BaseEntity.class);
    } catch (IOException e) {
      e.printStackTrace();
    }

    // Create login token
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
      credentials.username(),
      credentials.password(),
      new ArrayList<>());

    // Authenticate user
    return authenticationManager.authenticate(authenticationToken);
  }
}
