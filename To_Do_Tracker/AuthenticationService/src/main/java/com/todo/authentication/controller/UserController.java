package com.todo.authentication.controller;

import com.todo.authentication.model.User;
import com.todo.authentication.exception.UserAlreadyExistsException;
import com.todo.authentication.exception.UserNotFoundException;
import com.todo.authentication.service.ServiceTokenGenerator;
import com.todo.authentication.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("authentication/api/v1")
public class UserController {
    
    private UserService userService;
    private ServiceTokenGenerator serviceTokenGenerator;

    public UserController(UserService userService, ServiceTokenGenerator serviceTokenGenerator) {
        this.userService = userService;
        this.serviceTokenGenerator = serviceTokenGenerator;
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveNewUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            return new ResponseEntity<>(userService.saveNewUser(user), HttpStatus.OK);
        } catch (UserAlreadyExistsException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("An error occurred! Try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws UserNotFoundException {
        try {
            User user2 = userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
            return new ResponseEntity<>(serviceTokenGenerator.generateToken(user2), HttpStatus.OK);
        } catch (UserNotFoundException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("An error occurred! Try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/latest-id")
    public ResponseEntity<?> getLatestUserID() {
        try {
            return new ResponseEntity<>(userService.getLatestUserID(), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("An error occurred! Try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
