package com.danyaturk.project.backend.payload;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * LogInRequest
 */
@Getter
@Setter
@AllArgsConstructor
public class LogInRequest {
  @NotBlank
  private String userNameOrEmail;

  @NotBlank
  private String password;
}