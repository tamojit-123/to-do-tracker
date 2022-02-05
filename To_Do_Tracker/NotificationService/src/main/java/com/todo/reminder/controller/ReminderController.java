package com.todo.reminder.controller;

import com.todo.reminder.exception.UserNotFoundException;
import com.todo.reminder.service.ReminderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task-reminder/api/v1/user/{userID}/tasks")
public class ReminderController {
    
    private ReminderService reminderService;

    @Autowired
    public ReminderController(ReminderService reminderService) {
        this.reminderService = reminderService;
    }


    @GetMapping("/all")
    public ResponseEntity<?> getAllTasks(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getAllTasks(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/pending")
    public  ResponseEntity<?> getPendingTasks(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getPendingTasks(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/completed")
    public ResponseEntity<?> getCompletedTasks(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getCompletedTasks(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/neardue")
    public ResponseEntity<?> getTasksWithNearDueDate(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksWithNearDueDate(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/overdue")
    public ResponseEntity<?> getTasksOverDue(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksWithOverDue(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/high-priority")
    public ResponseEntity<?> getTasksWithHighPriority(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksWithHighPriority(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<?> getTasksByCategory(@PathVariable("userID") int userID, @PathVariable("category") String category) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksByCategory(userID, category), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sorted-duedate")
    public ResponseEntity<?> getTasksSortedByDueDate(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksSortedByDueDate(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sorted-priority")
    public ResponseEntity<?> getTasksSortedByPriority(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(reminderService.getTasksSortedByPriorityLevel(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Unforeseen Error!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
