package com.ilouse.controller;

import com.ilouse.entity.User;
import com.ilouse.service.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Integer id){
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    public List<User> save(@RequestBody List<User> users){
        return  userService.saveAll(users);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        userService.deleteById(id);
    }
}
