package com.todo.reminder.repository;

import com.todo.reminder.domain.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReminderRepository extends MongoRepository<User, Integer> {

}