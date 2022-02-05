package com.todo.authentication.repository;

import com.todo.authentication.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    User findUserByEmailAndPassword(String email, String password);
}
