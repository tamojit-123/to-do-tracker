package com.todo.reminder.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "todo")
@Data @AllArgsConstructor @NoArgsConstructor
public class User {
    @Id
    private int userID;
    private String userName;
    private String email;
    private String password;
    private List<Task> tasks;
}
