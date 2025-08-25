package com.ilouse.controller;

import com.ilouse.entity.Client;
import com.ilouse.service.client.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> findAll(){
        return clientService.findAll();
    }

    @GetMapping("/{id}")
    public Client findById(@PathVariable Integer id){
        return clientService.findById(id);
    }

    @PostMapping
    public List<Client> save(@RequestBody List<Client> clients){
        return  clientService.saveAll(clients);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        clientService.deleteById(id);
    }
}
