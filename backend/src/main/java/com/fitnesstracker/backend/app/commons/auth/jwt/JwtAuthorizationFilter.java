package com.fitnesstracker.backend.app.commons.auth.jwt;


import static com.fitnesstracker.backend.app.commons.auth.jwt.JwtProperties.JWT_SECRET;
import static com.fitnesstracker.backend.app.commons.auth.jwt.JwtProperties.TOKEN_HEADER;
import static com.fitnesstracker.backend.app.commons.auth.jwt.JwtProperties.TOKEN_PREFIX;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.impl.TextCodec;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

  public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
    super(authenticationManager);
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
    FilterChain chain) throws IOException, ServletException {
    // Read the Authorization header, where the JWT token should be
    String header = request.getHeader(TOKEN_HEADER);

    // If header does not contain BEARER or is null delegate to Spring impl and exit
    if (header == null || !header.startsWith(TOKEN_PREFIX)) {
      chain.doFilter(request, response);
      return;
    }

    // If header is present, try grab user principal from database and perform authorization
    Authentication authentication = getUsernamePasswordAuthentication(request);
    SecurityContextHolder.getContext().setAuthentication(authentication);

    // Continue filter execution
    chain.doFilter(request, response);
  }

  private Authentication getUsernamePasswordAuthentication(HttpServletRequest request) {
    String token = request.getHeader(TOKEN_HEADER);
    if (token != null && token.startsWith(TOKEN_PREFIX)) {
      try {
        byte[] signingKey = TextCodec.BASE64.decode(JWT_SECRET);

        Jws<Claims> parsedToken = Jwts.parser()
          .setSigningKey(signingKey)
          .parseClaimsJws(token.replace(TOKEN_PREFIX, ""));

        String username = parsedToken
          .getBody()
          .getSubject();

        List<SimpleGrantedAuthority> authorities = ((List<?>) parsedToken.getBody()
          .get("roles")).stream()
          .map(authority -> new SimpleGrantedAuthority((String) authority))
          .collect(Collectors.toList());

        if (username != null) {
          return new UsernamePasswordAuthenticationToken(username, null, authorities);
        }
      } catch (ExpiredJwtException exception) {
        System.out.println(
          String.format("Invalid/Expired JWT : %s failed : %s", token, exception.getMessage()));
      }
    }
    return null;
  }
}
