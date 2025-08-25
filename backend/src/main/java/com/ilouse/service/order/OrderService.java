package com.ilouse.service.order;

import com.ilouse.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> findAll();
    Order findById(Integer id);
    List<Order> saveAll(List<Order> orders );
    void deleteById(Integer id);

}
