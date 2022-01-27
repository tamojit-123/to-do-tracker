package com.todo.manager.repository;

import com.todo.manager.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTaskRepository extends MongoRepository<User, Integer>{
    
    User findUserByEmailAndPassword(String email, String password);
}