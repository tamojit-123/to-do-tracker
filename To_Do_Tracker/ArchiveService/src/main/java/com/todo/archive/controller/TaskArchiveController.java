package com.todo.archive.controller;

import com.todo.archive.exception.TaskNotFoundException;
import com.todo.archive.service.TaskArchiveService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task-archive/api/v1/user/{userID}/tasks")
public class TaskArchiveController {
    
    private TaskArchiveService archiveService;

    @Autowired
    public TaskArchiveController(TaskArchiveService archiveService) {
        this.archiveService = archiveService;
    }

    @GetMapping("/archived")
    public ResponseEntity<?> getAllTasksOfUser(@PathVariable("userID") int userID) {
        try {
            return new ResponseEntity<>(archiveService.getAllTasksOfUser(userID), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{taskID}")
    public ResponseEntity<?> deleteTaskFromArchive(@PathVariable("taskID") int taskID) throws TaskNotFoundException {
        try {
            return new ResponseEntity<>(archiveService.deleteTaskFromArchive(taskID), HttpStatus.OK);
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
