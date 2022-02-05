package com.todo.archive.service;

import java.util.List;

import com.todo.archive.model.Task;
import com.todo.archive.exception.TaskNotFoundException;

public interface TaskArchiveService {
    
    List<Task> getAllTasksOfUser(int userID);
    boolean deleteTaskFromArchive(int taskID) throws TaskNotFoundException;
}
