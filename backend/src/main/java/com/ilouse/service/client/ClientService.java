package com.ilouse.service.client;

import com.ilouse.entity.Client;

import java.util.List;

public interface ClientService {
    List<Client> findAll();
    Client findById(Integer id);
    List<Client> saveAll(List<Client> clients);
    void deleteById(Integer id);

}
