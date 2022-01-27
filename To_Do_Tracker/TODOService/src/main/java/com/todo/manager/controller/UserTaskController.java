package com.todo.manager.controller;

import com.todo.manager.model.Task;
import com.todo.manager.model.User;
import com.todo.manager.dto.UserDTO;
import com.todo.manager.exception.TaskAlreadyExistsException;
import com.todo.manager.exception.TaskNotFoundException;
import com.todo.manager.exception.UserAlreadyExistsException;
import com.todo.manager.exception.UserNotFoundException;
import com.todo.manager.proxy.UserAuthenticationProxy;
import com.todo.manager.service.UserTaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task-manager/api/v1")
public class UserTaskController {

    private UserTaskService service;
    private UserAuthenticationProxy authenticationProxy;

    @Autowired
    public UserTaskController(UserTaskService service, UserAuthenticationProxy authenticationProxy) {
        this.service = service;
        this.authenticationProxy = authenticationProxy;
    }


    @PostMapping("/register")
    public ResponseEntity<?> addNewUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            User user2 = service.addNewUser(user);
            UserDTO userDTO = new UserDTO(user2.getUserID(), user2.getUserName(), user2.getEmail(), user2.getPassword());
            return authenticationProxy.registerUser(userDTO);
        } catch(UserAlreadyExistsException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws UserNotFoundException {
        try {
            User user2 = service.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
            UserDTO userDTO = new UserDTO(user2.getUserID(), user2.getUserName(), user2.getEmail(), user2.getPassword());
            return authenticationProxy.loginUser(userDTO);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user/{userID}/task")
    public ResponseEntity<?> addTaskToUser(@PathVariable("userID") int userID, @RequestBody Task task) throws UserNotFoundException, TaskAlreadyExistsException {
        try {
            return new ResponseEntity<>(service.addTasktoList(userID, task), HttpStatus.CREATED);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskAlreadyExistsException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}")
    public ResponseEntity<?> updateExistingTask(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody Task task) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateExistingTask(userID, taskID, task), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/user/{userID}/task/{taskID}")
    public ResponseEntity<?> deleteExistingTask(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.deleteExistingTask(userID, taskID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/heading")
    public ResponseEntity<?> updateTaskHeading(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String heading) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskHeading(userID, taskID, heading), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/content")
    public ResponseEntity<?> updateTaskContent(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String content) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskContent(userID, taskID, content), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/duedate")
    public ResponseEntity<?> updateTaskDueDate(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String dueDate) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskDueDate(userID, taskID, dueDate), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/priority")
    public ResponseEntity<?> updateTaskPriorityLevel(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String priorityLevel) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskPriority(userID, taskID, priorityLevel), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/category")
    public ResponseEntity<?> updateTaskCategory(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String category) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskCategory(userID, taskID, category), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/image")
    public ResponseEntity<?> updateTaskImage(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID, @RequestBody String imageUrl) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.updateTaskCategory(userID, taskID, imageUrl), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/mark-complete")
    public ResponseEntity<?> markTaskAsComplete(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.markTaskAsCompleted(userID, taskID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch(TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/user/{userID}/task/{taskID}/archive")
    public ResponseEntity<?> moveTaskToArchive(@PathVariable("userID") int userID, @PathVariable("taskID") int taskID) throws UserNotFoundException, TaskNotFoundException {
        try {
            return new ResponseEntity<>(service.moveTaskToArchive(userID, taskID), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            throw e;
        } catch (TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{userID}/latest-task-id")
    public ResponseEntity<?> getLatestTaskID(@PathVariable("userID") int userID) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(service.getLatestTaskID(userID), HttpStatus.OK);
        } catch(UserNotFoundException e) {
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}