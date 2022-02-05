package com.todo.archive.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "No task present in the archive matching the given data!", code = HttpStatus.NOT_FOUND)
public class TaskNotFoundException extends Exception {
    
}