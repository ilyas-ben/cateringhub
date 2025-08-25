package com.ilouse.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ilouse.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
}
