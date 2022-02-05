package com.todo.manager.proxy;

import com.todo.manager.dto.UserDTO;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "user-authentication-service", url = "localhost:8081")
public interface UserAuthenticationProxy {
    
    @PostMapping("/authentication/api/v1/register")
    public ResponseEntity<?> registerUser(UserDTO user);

    @PostMapping("/authentication/api/v1/login")
    public ResponseEntity<?> loginUser(UserDTO user);
}
