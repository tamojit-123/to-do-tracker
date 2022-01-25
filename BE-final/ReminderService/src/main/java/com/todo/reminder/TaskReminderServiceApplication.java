package com.todo.reminder;

import com.todo.reminder.exception.UserNotFoundException;
import com.todo.reminder.service.ReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.event.EventListener;

import javax.mail.MessagingException;

@SpringBootApplication
@EnableEurekaClient
public class TaskReminderServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskReminderServiceApplication.class, args);
    }

    private ReminderService reminderService;

    @Autowired
    public TaskReminderServiceApplication(ReminderService reminderService) {
        this.reminderService = reminderService;
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void sendEmailReminderOInit() throws UserNotFoundException, MessagingException {
//        System.out.println(reminderService.sendEmailReminders());
//    }
}
