package com.todo.authentication.service;

import java.util.Map;

import com.todo.authentication.domain.User;

public interface ServiceTokenGenerator {
    Map<String, String> generateToken(User user);
}
