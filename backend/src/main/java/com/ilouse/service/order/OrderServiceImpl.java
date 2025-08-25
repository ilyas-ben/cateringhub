package com.ilouse.service.order;

import com.ilouse.entity.Order;
import com.ilouse.repo.OrderRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;

    public OrderServiceImpl(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @Override
    public List<Order> findAll() {
        return orderRepo.findAll();
    }

    @Override
    public Order findById(Integer id) {
        return orderRepo.findById(id).get();
    }

    @Override
    public List<Order> saveAll(List<Order> orders) {
        return orderRepo.saveAll(orders);
    }

    @Override
    public void deleteById(Integer id) {
        orderRepo.deleteById(id);
    }
}
