package com.ilouse.service.client;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ilouse.entity.Client;
import com.ilouse.repo.ClientRepo;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepo clientRepo;

    public ClientServiceImpl(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    @Override
    public List<Client> findAll() {
        return clientRepo.findAll();
    }

    @Override
    public Client findById(Integer id) {
        return clientRepo.findById(id).get();
    }

    @Override
    public List<Client> saveAll(List<Client> clients) {
        return clientRepo.saveAll(clients);
    }

    @Override
    public void deleteById(Integer id) {
        clientRepo.deleteById(id);
    }
}
