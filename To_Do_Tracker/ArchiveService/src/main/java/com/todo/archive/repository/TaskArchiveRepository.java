package com.todo.archive.repository;

import java.util.List;

import com.todo.archive.model.Task;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskArchiveRepository extends MongoRepository<Task, Integer> {
    
    List<Task> findTaskByUserID(int userID);
}
