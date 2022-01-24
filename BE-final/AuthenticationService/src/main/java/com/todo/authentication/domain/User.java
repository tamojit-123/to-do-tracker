package com.todo.authentication.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor
@Entity
public class User {
    @Id
    private int userID;
    private String userName;
    private String email;
    private String password;
}