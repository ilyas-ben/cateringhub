package com.ilouse.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Map;

@Entity
@Table(name = "orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int price;

    @Column
    private int description;

    @JoinColumn(name = "client_id")
    @ManyToOne(cascade = CascadeType.ALL)
    private Client client;
}
