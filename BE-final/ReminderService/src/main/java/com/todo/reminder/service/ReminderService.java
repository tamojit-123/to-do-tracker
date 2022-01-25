package com.todo.reminder.service;

import java.util.List;

import com.todo.reminder.domain.Task;
import com.todo.reminder.exception.UserNotFoundException;

import javax.mail.MessagingException;

public interface ReminderService {

    List<Task> getAllTasks(int userID) throws  UserNotFoundException;

    List<Task> getPendingTasks(int userID) throws UserNotFoundException;

    List<Task> getCompletedTasks(int userID) throws UserNotFoundException;

    List<Task> getTasksWithNearDueDate(int userID) throws UserNotFoundException;

    List<Task> getTasksWithOverDue(int userID) throws UserNotFoundException;

    List<Task> getTasksWithHighPriority(int userID) throws UserNotFoundException;

    List<Task> getTasksByCategory(int userID, String category) throws UserNotFoundException;

    List<Task> getTasksSortedByDueDate(int userID) throws UserNotFoundException;

    List<Task> getTasksSortedByPriorityLevel(int userID) throws UserNotFoundException;

//    String sendEmailReminders() throws UserNotFoundException, MessagingException;
}
