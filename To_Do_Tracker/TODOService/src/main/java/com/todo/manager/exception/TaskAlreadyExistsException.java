package com.todo.manager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "A task with the given 'taskID' already exists for the user")
public class TaskAlreadyExistsException extends Exception {
    
}
