package com.ivanfranchin.orderapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Doctor {

    @Id
    private Long Docid;

    private String name;

    private String username;

    private String password;

    public Doctor(String name, String username, String password, String specialfor, String role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.specialfor = specialfor;
        this.role = role;
    }

    private String specialfor;



//    @OneToMany
//    private List<Order> appoiment;

    private String role;


}
