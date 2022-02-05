package com.todo.archive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "archive")
@Data @AllArgsConstructor @NoArgsConstructor
public class Task {
    
    @Id
    private int taskID;
    private int userID;
    private String taskHeading;
    private String taskContent;
    private String dueDate;
    private Priority priorityLevel;
    private String category;
    private String imageUrl;
    private boolean isCompleted;
}
