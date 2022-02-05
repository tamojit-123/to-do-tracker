package com.todo.authentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "No user found matching the given data!", code = HttpStatus.NOT_FOUND)
public class UserNotFoundException extends Exception {
    
}
