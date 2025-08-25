package com.ilouse.service.order;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.ilouse.entity.Order;
import com.ilouse.repo.OrderRepo;

class OrderServiceTest {
	@Mock
	private OrderRepo orderRepo;

	@InjectMocks
	private OrderServiceImpl orderService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testFindAll() {
		Order order1 = new Order();
		Order order2 = new Order();
		List<Order> orders = Arrays.asList(order1, order2);
		Mockito.when(orderRepo.findAll()).thenReturn(orders);
		List<Order> result = orderService.findAll();
		org.junit.jupiter.api.Assertions.assertEquals(2, result.size());
		Mockito.verify(orderRepo).findAll();
	}

	@Test
	void testFindById() {
		Order order = new Order();
		Mockito.when(orderRepo.findById(1)).thenReturn(Optional.of(order));
		Order result = orderService.findById(1);
		org.junit.jupiter.api.Assertions.assertNotNull(result);
		Mockito.verify(orderRepo).findById(1);
	}

	@Test
	void testSaveAll() {
		Order order1 = new Order();
		Order order2 = new Order();
		List<Order> orders = Arrays.asList(order1, order2);
		Mockito.when(orderRepo.saveAll(orders)).thenReturn(orders);
		List<Order> result = orderService.saveAll(orders);
		org.junit.jupiter.api.Assertions.assertEquals(orders, result);
		Mockito.verify(orderRepo).saveAll(orders);
	}

	@Test
	void testDeleteById() {
		orderService.deleteById(1);
		Mockito.verify(orderRepo).deleteById(1);
	}
}
