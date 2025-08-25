package com.ilouse.service.user;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ilouse.entity.User;
import com.ilouse.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    public User findById(Integer id) {
        return userRepo.findById(id).get();
    }

    @Override
    public List<User> saveAll(List<User> users) {
        return userRepo.saveAll(users);
    }

    @Override
    public void deleteById(Integer id) {
        userRepo.deleteById(id);
    }
}
