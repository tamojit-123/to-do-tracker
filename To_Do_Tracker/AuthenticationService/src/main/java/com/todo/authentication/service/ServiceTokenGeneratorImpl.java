package com.todo.authentication.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.todo.authentication.model.User;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class ServiceTokenGeneratorImpl implements ServiceTokenGenerator {

    @Override
    public Map<String, String> generateToken(User user) {
        String JwtToken = Jwts.builder()
                            .setSubject(Integer.toString(user.getUserID()))
                            .setIssuedAt(new Date())
                            .signWith(SignatureAlgorithm.HS256, "user@123")
                            .compact();
        Map<String, String> tokenMap = new HashMap<>();   
        tokenMap.put("message", "Login Successful");    
        tokenMap.put("token", JwtToken);             
        return tokenMap;
    }
}
