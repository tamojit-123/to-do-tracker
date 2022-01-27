package com.todo.archive.rabbitconfig;

import com.todo.archive.model.Task;
import com.todo.archive.repository.TaskArchiveRepository;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class TaskConsumer {
    
    private TaskArchiveRepository archiveRepository;

    @Autowired
    public TaskConsumer(TaskArchiveRepository archiveRepository) {
        this.archiveRepository = archiveRepository;
    }

    @RabbitListener(queues = "archive-queue")
    public void ListenToAndSavePublishedTasks(Task task) {
        archiveRepository.save(task);
        System.out.println("\nSuccessfully saved a new task into 'archive'!\n" + task);
    }

    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }
}
