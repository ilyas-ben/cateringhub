package com.ilouse.controller;

import com.ilouse.configuration.jwt.JwtUtils;
import com.ilouse.service.user.UserService;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final JwtUtils jwtUtils;

    public AuthController(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtUtils.generateTokenFromUserDetails(userDetails);

        LoginResponse response = LoginResponse.builder()
                .username(userDetails.getUsername())
                .token(token)
                .build();

        return ResponseEntity.ok(response);
    }

    @Data
    @Builder
    static class LoginRequest {
        private String username;
        private String password;
    }

    @Data
    @Builder
    static class LoginResponse {
        private String username;
        private List<String> roles;
        private String token;
    }
}
