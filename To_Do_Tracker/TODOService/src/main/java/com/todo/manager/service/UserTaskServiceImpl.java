package com.todo.manager.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import com.todo.manager.model.Priority;
import com.todo.manager.model.Task;
import com.todo.manager.model.User;
import com.todo.manager.dto.TaskDTO;
import com.todo.manager.exception.TaskAlreadyExistsException;
import com.todo.manager.exception.TaskNotFoundException;
import com.todo.manager.exception.UserAlreadyExistsException;
import com.todo.manager.exception.UserNotFoundException;
import com.todo.manager.repository.UserTaskRepository;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserTaskServiceImpl implements UserTaskService {

    private UserTaskRepository repository;
    private RabbitTemplate rabbitTemplate;

    @Autowired
    public UserTaskServiceImpl(UserTaskRepository repository, RabbitTemplate rabbitTemplate) {
        this.repository = repository;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public User addNewUser(User user) throws UserAlreadyExistsException {
        Optional<User> user2 = repository.findById(user.getUserID());
        if (user2.isEmpty()) {
            return repository.insert(user);
        }
        throw new UserAlreadyExistsException();
    }
    
    @Override
    public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException {
        User user = repository.findUserByEmailAndPassword(email, password);
        if (user == null) {
            throw new UserNotFoundException();
        }
        return user;
    }

    @Override
    public Task addTasktoList(int userID, Task task) throws UserNotFoundException, TaskAlreadyExistsException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task2 : userTasks) {
            if (task2.getTaskID() == task.getTaskID()) {
                throw new TaskAlreadyExistsException();
            }
        }
        userTasks.add(task);
        user.setTasks(userTasks);
        repository.save(user);
        return task;
    }

    @Override
    public Task updateExistingTask(int userID, int taskID, Task task) throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task2 : userTasks) {
            if (task2.getTaskID() == taskID) {
                userTasks.remove(task2);
                task.setTaskID(taskID);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return task;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public boolean deleteExistingTask(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                user.setTasks(userTasks);
                repository.save(user);
                return true;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskHeading(int userID, int taskID, String heading)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setTaskHeading(heading);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's heading has been updated to: \n" + heading;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskContent(int userID, int taskID, String content)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setTaskContent(content);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's content has been updated to: \n" + content;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskDueDate(int userID, int taskID, String dueDate)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setDueDate(dueDate);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's due date has been updated to: \n" + dueDate;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskPriority(int userID, int taskID, String priorityLevel)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setPriorityLevel(Priority.valueOf(priorityLevel));
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's priority level has been updated to: \n" + priorityLevel.toString();
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskCategory(int userID, int taskID, String category)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setCategory(category);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's category has been updated to: \n" + category;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public String updateTaskImage(int userID, int taskID, String imageUrl)
            throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setImageUrl(imageUrl);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return "The task's image has been updated to: \n" + imageUrl;
            }
        }
        throw new TaskNotFoundException();
    }


    @Override
    public boolean markTaskAsCompleted(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                task.setCompleted(true);
                userTasks.add(task);
                user.setTasks(userTasks);
                repository.save(user);
                return task.isCompleted();
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public boolean moveTaskToArchive(int userID, int taskID) throws UserNotFoundException, TaskNotFoundException  {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        for (Task task : userTasks) {
            if (task.getTaskID() == taskID) {
                userTasks.remove(task);
                TaskDTO taskDTO = new TaskDTO(task.getTaskID(), userID, task.getTaskHeading(), task.getTaskContent(), task.getDueDate(), task.getPriorityLevel(), task.getCategory(), task.getImageUrl(), task.isCompleted());
                rabbitTemplate.convertAndSend("task-exchange", "archive", taskDTO);
                user.setTasks(userTasks);
                repository.save(user);
                System.out.println("\nPublished a new task into 'archive'!\n" + taskDTO);
                return true;
            }
        }
        throw new TaskNotFoundException();
    }

    @Override
    public int getLatestTaskID(int userID) throws UserNotFoundException {
        Optional<User> optionalUser = repository.findById(userID);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException();
        }
        User user = optionalUser.get();
        List<Task> userTasks = user.getTasks();
        if (userTasks.isEmpty()) {
            return userID * 100;
        }
        Collections.sort(userTasks);
        Task latestTask = userTasks.get(userTasks.size() - 1);
        return latestTask.getTaskID();
    }

}