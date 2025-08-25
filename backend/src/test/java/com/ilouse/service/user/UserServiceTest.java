package com.ilouse.service.user;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.ilouse.entity.User;
import com.ilouse.repo.UserRepo;

class UserServiceTest {
	@Mock
	private UserRepo userRepo;

	@InjectMocks
	private UserServiceImpl userService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testFindAll() {
		User user1 = new User();
		User user2 = new User();
		List<User> users = Arrays.asList(user1, user2);
		Mockito.when(userRepo.findAll()).thenReturn(users);
		List<User> result = userService.findAll();
		org.junit.jupiter.api.Assertions.assertEquals(2, result.size());
		Mockito.verify(userRepo).findAll();
	}

	@Test
	void testFindById() {
		User user = new User();
		Mockito.when(userRepo.findById(1)).thenReturn(Optional.of(user));
		User result = userService.findById(1);
		org.junit.jupiter.api.Assertions.assertNotNull(result);
		Mockito.verify(userRepo).findById(1);
	}

	@Test
	void testSaveAll() {
		User user1 = new User();
		User user2 = new User();
		List<User> users = Arrays.asList(user1, user2);
		Mockito.when(userRepo.saveAll(users)).thenReturn(users);
		List<User> result = userService.saveAll(users);
		org.junit.jupiter.api.Assertions.assertEquals(users, result);
		Mockito.verify(userRepo).saveAll(users);
	}

	@Test
	void testDeleteById() {
		userService.deleteById(1);
		Mockito.verify(userRepo).deleteById(1);
	}
}
