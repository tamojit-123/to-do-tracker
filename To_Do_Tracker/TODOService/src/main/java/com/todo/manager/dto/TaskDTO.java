package com.todo.manager.dto;

import com.todo.manager.model.Priority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class TaskDTO {
    
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
