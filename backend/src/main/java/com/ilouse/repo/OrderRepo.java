package com.ilouse.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ilouse.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {
}
