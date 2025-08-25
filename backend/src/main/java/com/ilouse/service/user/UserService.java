package com.ilouse.service.user;

import com.ilouse.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<User> findAll();
    List<User> saveAll(List<User> users);
    User findById(Integer id);
    void deleteById(Integer id);
    User findByUsername(String username);
}
