package com.todo.reminder.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data @AllArgsConstructor @NoArgsConstructor
public class Task {
    @Id
    private int taskID;
    private String taskHeading;
    private String taskContent;
    private String dueDate;
    private Priority priorityLevel;
    private String category;
    private String imageUrl;
    private boolean isCompleted;
}
