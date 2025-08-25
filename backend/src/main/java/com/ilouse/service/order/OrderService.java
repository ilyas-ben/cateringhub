package com.ilouse.service.order;

import java.util.List;

import com.ilouse.entity.Order;

public interface OrderService {
    List<Order> findAll();

    Order findById(Integer id);

    List<Order> saveAll(List<Order> orders);

    void deleteById(Integer id);
}
