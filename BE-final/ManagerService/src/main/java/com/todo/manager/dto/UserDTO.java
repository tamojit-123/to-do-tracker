package com.todo.manager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class UserDTO {
    
    private int userID;
    private String userName;
    private String email;
    private String password;
}
