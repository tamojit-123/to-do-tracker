package com.todo.archive.service;

import com.todo.archive.domain.Image;
import com.todo.archive.domain.Priority;
import com.todo.archive.domain.Task;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.todo.archive.repository.TaskArchiveRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TestTaskArchiveService {

//    @Mock
//    private TaskArchiveRepository taskArchiveRepository;
//
//    @Mock
//    private TaskArchiveServiceImpl taskArchiveService;
//
//    @Autowired
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
//
//
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
//
//    }
//
//    @Test
//    public void testGetAllArchiveTaskOfUserTrue() throws Exception{
//
//        when(taskArchiveRepository.findById(anyInt())).thenReturn(Optional.of(task));
//        assertEquals(2,taskArchiveService.getAllTasksOfUser(anyInt()).size());
//        verify(taskArchiveRepository,times(1)).findById(anyInt());
//
//    }
//
//    @Test
//    public void testDeleteTaskFromArchiveTrue() throws Exception{
//
////
////        when(taskArchiveRepository.findById(task.getTaskID())).thenReturn(Optional.of(task));
////        taskArchiveRepository.save(task);
////        assertEquals(true,taskArchiveService.deleteTaskFromArchive(task.getTaskID()));
////        verify(taskArchiveRepository,times(1)).findById(task.getTaskID());
////        verify(taskArchiveRepository,times(1)).delete(task);
//    }


}
