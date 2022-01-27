package com.todo.archive.controller;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;

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
