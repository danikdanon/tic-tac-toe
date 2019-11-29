package com.danyaturk.project.backend.config;

import java.util.Hashtable;

import com.danyaturk.project.backend.model.User;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * SecurityConfig
 */
@Configuration
@SpringBootApplication
public class SecurityConfig {
  @Bean
  public PasswordEncoder passwordEncoder() {
    PasswordEncoder encoder = new BCryptPasswordEncoder();
    return encoder;
  }

  @Bean
  public Hashtable<String, User> currentlyLoggedUser() {
    Hashtable<String, User> loggedUser = new Hashtable<String, User>();
    return loggedUser;
  }
}
