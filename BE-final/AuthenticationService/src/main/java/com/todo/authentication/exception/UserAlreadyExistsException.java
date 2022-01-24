package com.todo.authentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "An user with the given userID already exists!", code = HttpStatus.CONFLICT)
public class UserAlreadyExistsException extends Exception {
    
}
