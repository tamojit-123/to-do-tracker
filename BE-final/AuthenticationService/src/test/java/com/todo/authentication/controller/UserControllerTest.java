package com.todo.authentication.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.todo.authentication.domain.User;
import com.todo.authentication.exception.UserAlreadyExistsException;
import com.todo.authentication.exception.UserNotFoundException;
import com.todo.authentication.service.ServiceTokenGenerator;
import com.todo.authentication.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.setup.StandaloneMockMvcBuilder;

import static org.mockito.Mockito.*;
import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {
//    @Autowired
//    MockMvc mockMvc;
//
//    @Mock
//    UserService userService;
//    @Mock
//    ServiceTokenGenerator serviceTokenGenerator;
//
//    private User user, user2;
//    List<User> userList;
//
//    @InjectMocks
//    UserController userController;
//
//    @BeforeEach
//    void setUp(){
//        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
//        user=new User(1,"SidheshK","sidh12@gmail.com","123654");
//        user2=new User(2,"Srihari","sri01@gmail.com","654321");
//    }
//
//
//
//    @Test
//    public void givenUserToSaveReturnSaveUserSuccess() throws Exception{
//
//        when(userService.saveNewUser(any())).thenReturn(user);
//        mockMvc.perform(post("/authentication/api/v1/register")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userService,times(1)).saveNewUser(any());
//
//
//    }
//
//    @Test
//    public void givenUserToSaveReturnSaveUserFailure() throws Exception{
//
//        when(userService.saveNewUser(any())).thenThrow(UserAlreadyExistsException.class);
//        mockMvc.perform(post("/authentication/api/v1/register")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//        verify(userService,times(1)).saveNewUser(any());
//
//    }
//
//    @Test
//    public void testUserLoginByEmailAndPasswordSuccess() throws Exception{
//
//        when(userService.getUserByEmailAndPassword(anyString(),anyString())).thenReturn(user);
//        when(serviceTokenGenerator.generateToken(any())).thenReturn(new HashMap<>());
//        mockMvc.perform(post("/authentication/api/v1/login")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userService,times(1)).getUserByEmailAndPassword(anyString(),anyString());
//    }
//
//    @Test
//    public void testUserLoginByEmailAndPasswordFaliure() throws Exception{
//
//        when(userService.getUserByEmailAndPassword(anyString(),anyString())).thenThrow(new UserNotFoundException());
//        mockMvc.perform(post("/authentication/api/v1/login")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isNotFound()).andDo(MockMvcResultHandlers.print());
//        verify(userService,times(1)).getUserByEmailAndPassword(anyString(),anyString());
//    }
//
//    @Test
//    public void testgetLatestUserIDSuccess() throws Exception{
//
//        when(userService.getLatestUserID()).thenReturn(user.getUserID());
//        mockMvc.perform(get("/authentication/api/v1/latest-id")
//        .contentType(MediaType.APPLICATION_JSON)
//        .content(jsontoString(user)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userService,times(1)).getLatestUserID();
//    }
//
//
//    private static String jsontoString(final Object o) throws JsonProcessingException {
//        String result;
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            String jsonContent = mapper.writeValueAsString(o);
//            result=jsonContent;
//        }
//        catch(JsonProcessingException e){
//            result="JSON Processing error";
//            ;            }
//        return result;
//    }
}
