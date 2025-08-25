package com.ilouse.service.user;

import com.ilouse.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    List<User> saveAll(List<User> users);
    User findById(Integer id);
    void deleteById(Integer id);

}
