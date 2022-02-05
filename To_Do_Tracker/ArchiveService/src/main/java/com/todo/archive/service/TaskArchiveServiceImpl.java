package com.todo.archive.service;

import java.util.List;
import java.util.Optional;

import com.todo.archive.model.Task;
import com.todo.archive.exception.TaskNotFoundException;
import com.todo.archive.repository.TaskArchiveRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskArchiveServiceImpl implements TaskArchiveService {

    private TaskArchiveRepository taskArchiveRepository;

    @Autowired
    public TaskArchiveServiceImpl(TaskArchiveRepository taskArchiveRepository) {
        this.taskArchiveRepository = taskArchiveRepository;
    }

    @Override
    public List<Task> getAllTasksOfUser(int userID) {
        
        return taskArchiveRepository.findTaskByUserID(userID);
    }

    @Override
    public boolean deleteTaskFromArchive(int taskID)  throws TaskNotFoundException {

        Optional<Task> toBeDeleted = taskArchiveRepository.findById(taskID);

        if (toBeDeleted.isEmpty()) {
            throw new TaskNotFoundException();
        }
 
        taskArchiveRepository.delete(toBeDeleted.get()); 
        return true;
    }
    
}
