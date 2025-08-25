package com.ilouse.service.client;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Mockito;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import com.ilouse.entity.Client;
import com.ilouse.repo.ClientRepo;
import com.ilouse.service.client.ClientServiceImpl;

public class ClientServiceTest {
	@Mock
	private ClientRepo clientRepo;

	@InjectMocks
	private ClientServiceImpl clientService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testFindAll() {
		Client client1 = new Client();
		Client client2 = new Client();
		List<Client> clients = Arrays.asList(client1, client2);
		Mockito.when(clientRepo.findAll()).thenReturn(clients);
		List<Client> result = clientService.findAll();
		org.junit.jupiter.api.Assertions.assertEquals(2, result.size());
		Mockito.verify(clientRepo).findAll();
	}

	@Test
	void testFindById() {
		Client client = new Client();
		Mockito.when(clientRepo.findById(1)).thenReturn(Optional.of(client));
		Client result = clientService.findById(1);
		org.junit.jupiter.api.Assertions.assertNotNull(result);
		Mockito.verify(clientRepo).findById(1);
	}

	@Test
	void testSaveAll() {
		Client client1 = new Client();
		Client client2 = new Client();
		List<Client> clients = Arrays.asList(client1, client2);
		Mockito.when(clientRepo.saveAll(clients)).thenReturn(clients);
		List<Client> result = clientService.saveAll(clients);
		org.junit.jupiter.api.Assertions.assertEquals(clients, result);
		Mockito.verify(clientRepo).saveAll(clients);
	}

	@Test
	void testDeleteById() {
		clientService.deleteById(1);
		Mockito.verify(clientRepo).deleteById(1);
	}
}

