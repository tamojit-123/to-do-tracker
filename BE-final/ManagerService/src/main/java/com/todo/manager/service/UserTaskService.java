package com.todo.manager.service;

import com.todo.manager.domain.Image;
import com.todo.manager.domain.Priority;
import com.todo.manager.domain.Task;
import com.todo.manager.domain.User;
import com.todo.manager.exception.TaskAlreadyExistsException;
import com.todo.manager.exception.TaskNotFoundException;
import com.todo.manager.exception.UserAlreadyExistsException;
import com.todo.manager.exception.UserNotFoundException;

import java.util.List;

public interface UserTaskService {

    User addNewUser(User user) throws UserAlreadyExistsException;
    User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException;

    Task addTasktoList(int userID, Task task) throws UserNotFoundException, TaskAlreadyExistsException;
    Task updateExistingTask(int userID, int taskID, Task task) throws UserNotFoundException, TaskNotFoundException;
    boolean deleteExistingTask(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException;

    String updateTaskHeading(int userID, int taskID, String heading) throws UserNotFoundException, TaskNotFoundException;
    String updateTaskContent(int userID, int taskID, String content) throws UserNotFoundException, TaskNotFoundException;
    String updateTaskDueDate(int userID, int taskID, String dueDate) throws UserNotFoundException, TaskNotFoundException;
    String updateTaskPriority(int userID, int taskID, String priorityLevel) throws UserNotFoundException, TaskNotFoundException;
    String updateTaskCategory(int userID, int taskID, String category) throws UserNotFoundException, TaskNotFoundException;
    String updateTaskImage(int userID, int taskID, String imageUrl) throws UserNotFoundException, TaskNotFoundException;
//    boolean addImageToTask(int userID, int taskID, Image image) throws UserNotFoundException, TaskNotFoundException;
//    boolean deleteImageFromTask(int userID, int taskID,  Image image) throws UserNotFoundException, TaskNotFoundException;
    boolean markTaskAsCompleted(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException;

    boolean moveTaskToArchive(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException ;
    int getLatestTaskID(int userID) throws UserNotFoundException;
}