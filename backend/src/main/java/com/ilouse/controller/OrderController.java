package com.ilouse.controller;

import com.ilouse.entity.Order;
import com.ilouse.service.order.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> findAll(){
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public Order findById(@PathVariable Integer id){
        return orderService.findById(id);
    }

    @PostMapping
    public List<Order> save(@RequestBody List<Order> orders){
        return  orderService.saveAll(orders);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        orderService.deleteById(id);
    }
}
