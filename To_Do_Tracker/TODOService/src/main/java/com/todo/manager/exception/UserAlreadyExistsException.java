package com.todo.manager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "An user with the given 'userID' already exists!")
public class UserAlreadyExistsException extends Exception {
    
}
