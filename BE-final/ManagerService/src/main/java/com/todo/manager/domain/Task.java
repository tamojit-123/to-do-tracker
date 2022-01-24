package com.todo.manager.domain;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task implements Comparable<Task> {
    
    @Id
    private int taskID;
    private String taskHeading;
    private String taskContent;
    private String dueDate;
    private Priority priorityLevel;
    private String category;
    private boolean isCompleted = false;
    private List<Image> images = new ArrayList<>();


    @Override
    public int compareTo(Task t) {
        
        return this.taskID - t.taskID;
    }

    
}

