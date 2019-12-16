package com.fitnesstracker.backend.app.commons.auth.jwt;

import static com.fitnesstracker.backend.app.commons.auth.jwt.JwtProperties.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;

public class TokenGenerator {

  public static String generate(String username,
    Collection<? extends GrantedAuthority> authorities) {
    return Jwts.builder()
      .signWith(SignatureAlgorithm.HS256, TextCodec.BASE64.decode(JWT_SECRET))
      .setHeaderParam("typ", TOKEN_TYPE)
      .setIssuer(TOKEN_ISSUER)
      .setAudience(TOKEN_AUDIENCE)
      .setSubject(username)
      .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
      .claim("roles",
        authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
      .compact();
  }
}
