package com.ilouse.service.user;

import java.util.List;

import com.ilouse.entity.User;

public interface UserService {
    List<User> findAll();

    List<User> saveAll(List<User> users);

    User findById(Integer id);

    void deleteById(Integer id);
}
