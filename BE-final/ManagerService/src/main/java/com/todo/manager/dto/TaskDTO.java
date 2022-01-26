package com.todo.manager.dto;

import java.util.List;

import com.todo.manager.domain.Image;
import com.todo.manager.domain.Priority;

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
//    private List<Image> images;
    private String imageUrl;
    private boolean isCompleted;
}
