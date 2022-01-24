package com.todo.reminder.domain;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class Task {
    @Id
    private int taskID;
    private String taskHeading;
    private String taskContent;
    private String dueDate;
    private Priority priorityLevel;
    private String category;
    private List<Image> images;
    private boolean isCompleted;
}
