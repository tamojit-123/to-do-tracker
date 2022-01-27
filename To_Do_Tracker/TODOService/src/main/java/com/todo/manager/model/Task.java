package com.todo.manager.model;

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
    private String imageUrl;


    @Override
    public int compareTo(Task t) {
        
        return this.taskID - t.taskID;
    }

    
}

