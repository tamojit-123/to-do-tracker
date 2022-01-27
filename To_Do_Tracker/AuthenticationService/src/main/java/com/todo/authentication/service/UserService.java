package com.todo.authentication.service;

import com.todo.authentication.model.User;
import com.todo.authentication.exception.UserAlreadyExistsException;
import com.todo.authentication.exception.UserNotFoundException;

public interface UserService {

    User saveNewUser(User user) throws UserAlreadyExistsException;
    User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException;
    int getLatestUserID();
}