package com.todo.reminder.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.todo.reminder.model.Task;
import com.todo.reminder.model.User;
import com.todo.reminder.exception.UserNotFoundException;
import com.todo.reminder.repository.ReminderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReminderServiceImpl implements ReminderService {

    private ReminderRepository reminderRepo;

    @Autowired
    public ReminderServiceImpl(ReminderRepository reminderRepo) {
        this.reminderRepo = reminderRepo;
    }

    Comparator<Task> dueDateComparator = ((taskA, taskB) -> {
            LocalDate dueDateA = LocalDate.parse(taskA.getDueDate());
            LocalDate dueDateB = LocalDate.parse(taskB.getDueDate());
            if (dueDateA.isBefore(dueDateB)) {
                return -1;
            }
            if (dueDateA.isAfter(dueDateB)) {
                return 1;
            }
            return 0;
        }); 

    @Override
    public List<Task> getAllTasks(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        return allTasks.stream().sorted((t1, t2) -> t1.getTaskID() - t2.getTaskID()).collect(Collectors.toList());
    }

    @Override
    public List<Task> getPendingTasks(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> pendingTasks = allTasks.stream().filter(t -> !t.isCompleted()).collect(Collectors.toList());
        return pendingTasks.stream().sorted((t1, t2) -> t1.getTaskID() - t2.getTaskID()).collect(Collectors.toList());
    }

    @Override
    public List<Task> getCompletedTasks(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> completedTasks = allTasks.stream().filter(t -> t.isCompleted()).collect(Collectors.toList());
        return completedTasks;
    }

    @Override
    public List<Task> getTasksWithNearDueDate(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> tasksNearingDueDate = new ArrayList<>();
        for (Task task : allTasks) {
            if (task.isCompleted()) {
                continue;
            }
            LocalDate dueDate = LocalDate.parse(task.getDueDate());
            LocalDate tomorrowDate = LocalDate.now().plusDays(1);
            if (dueDate.isAfter(tomorrowDate) || dueDate.isBefore(LocalDate.now())){
                continue;
            } else {
                tasksNearingDueDate.add(task);
            }
        }
        return tasksNearingDueDate.stream().sorted(dueDateComparator).collect(Collectors.toList());
    }

    @Override
    public List<Task> getTasksWithOverDue(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> tasksOverDue = new ArrayList<>();
        for (Task task : allTasks) {
            if (task.isCompleted()) {
                continue;
            }
            LocalDate dueDate = LocalDate.parse(task.getDueDate());
            if (dueDate.isBefore(LocalDate.now())) {
                tasksOverDue.add(task);
            }
        }
        return tasksOverDue.stream().sorted(dueDateComparator).collect(Collectors.toList());
    }

    @Override
    public List<Task> getTasksWithHighPriority(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> highPriorityTasks = new ArrayList<>();
        for (Task task : allTasks) {
            if (task.isCompleted()) {
                continue;
            }
            if (task.getPriorityLevel().toString().equals("HIGH")) {
                highPriorityTasks.add(task);
            }
        }
        return highPriorityTasks;
    }

    @Override
    public List<Task> getTasksByCategory(int userID, String category) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> allTasks = user.get().getTasks();
        List<Task> tasksByCategory = new ArrayList<>();
        for (Task task : allTasks) {
            if (task.getCategory().equalsIgnoreCase(category)) {
                tasksByCategory.add(task);
            }
        }
        return tasksByCategory;
    }

    @Override
    public List<Task> getTasksSortedByDueDate(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> pendingTasks = user.get().getTasks().stream().filter(t -> !t.isCompleted()).collect(Collectors.toList());
        
        return pendingTasks.stream().sorted(dueDateComparator).collect(Collectors.toList());
    }

    @Override
    public List<Task> getTasksSortedByPriorityLevel(int userID) throws UserNotFoundException {
        Optional<User> user = reminderRepo.findById(userID);
        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }
        List<Task> pendingTasks = user.get().getTasks().stream().filter(t -> !t.isCompleted()).collect(Collectors.toList());
        Comparator<Task> priorityComparator = ((taskA, taskB) -> {
            if (taskA.getPriorityLevel().ordinal() > taskB.getPriorityLevel().ordinal()) {
                return -1;
            }
            if (taskA.getPriorityLevel().ordinal() < taskB.getPriorityLevel().ordinal()) {
                return 1;
            }
            return 0;
        });
        return pendingTasks.stream().sorted(priorityComparator).collect(Collectors.toList());
    }

}
