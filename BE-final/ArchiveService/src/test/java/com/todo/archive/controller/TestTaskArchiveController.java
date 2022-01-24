package com.todo.archive.controller;

import com.todo.archive.domain.Image;
import com.todo.archive.domain.Priority;
import com.todo.archive.domain.Task;
import com.todo.archive.exception.TaskNotFoundException;
import com.todo.archive.service.TaskArchiveService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TestTaskArchiveController {

//    @Mock
//    TaskArchiveService taskArchiveService;
//
//    @Autowired
//    MockMvc mockMvc;
//
//    @InjectMocks
//    TaskArchiveController taskArchiveController;
//
//    private Image image,image2;
//    private Priority priority;
//    private Task task,task2;
//    List<Task> taskList = new ArrayList<>();
//    List<Image> imageList = new ArrayList<>();
//
//    @BeforeEach
//    public void setUp(){
//
//        image= new Image("1","task.img");
//        image2=new Image("2","task2.img");
//        imageList.add(image);
//        imageList.add(image2);
//        task=new Task(1,11,"Heading1","Content1","01/01/2021",Priority.HIGH,"empty",List.of(image,image2),true);
//        task2=new Task(2,12,"Heading2","Content2","02/01/2021",Priority.LOW,"empty1",List.of(image,image2),true);
//        taskList.add(task);
//        taskList.add(task2);
//        mockMvc = MockMvcBuilders.standaloneSetup(taskArchiveController).build();
//
//    }
//
//    @AfterEach
//    public void tearDown(){
//
//        image=null;
//        image2=null;
//        imageList=null;
//        task=null;
//        task2=null;
//        taskList=null;
//
//    }
//
//    @Test
//    public void testGetAllTasksOfUserSuccess()throws Exception{
//
//        when(taskArchiveService.getAllTasksOfUser(anyInt())).thenReturn(taskList);
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-archive/api/v1/tasks/12"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(taskArchiveService, times(1)).getAllTasksOfUser(anyInt());
//    }
//
//   @Test
//    public void testDeleteTaskFromArchive()throws Exception{
//
//       when(taskArchiveService.deleteTaskFromArchive(anyInt())).thenReturn(true);
//       mockMvc.perform(MockMvcRequestBuilders.delete("/task-archive/api/v1/2"))
//               .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
////       verify(taskArchiveService,times(1)).deleteTaskFromArchive(anyInt());
//   }
}
