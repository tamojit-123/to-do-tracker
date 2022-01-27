package com.todo.manager.controller;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith(MockitoExtension.class)
public class UserTaskControllerTest {

//    @Autowired
//    MockMvc mockMvc;
//
//    @Mock
//    UserTaskService userTaskService;
//
//    @Mock
//    UserAuthenticationProxy authenticationProxy;
//
//    @Mock
//    RabbitTemplate rabbitTemplate;
//
//
//
//    private UserTaskRepository userTaskRepository;
//    private Image image,image2;
//    private Priority priority;
//    private Task task,task2;
//    private User user,user2;
//    List<Task> taskList = new ArrayList<>();
//    List<Image> imageList = new ArrayList<>();
//    ArrayList<User> userList=new ArrayList<>();
//
//    @InjectMocks
//    UserTaskController userTaskController;
//
//    @BeforeEach
//    public void setUp(){
//
//        mockMvc= MockMvcBuilders.standaloneSetup(userTaskController).build();
//        image= new Image("1","task.img");
//        image2=new Image("2","task2.img");
//        imageList.add(image);
//        imageList.add(image2);
//        task=new Task(01,"Dummy","testing","01/01/2021",Priority.HIGH,"xyz",true,imageList);
//        task2=new Task(02,"Dummy2","testing2","02/02/2021",Priority.LOW,"abc",true,imageList);
//        taskList.add(task);
//        taskList.add(task2);
//        user=new User(5,"Siddhesh","sidh@gmail.com","1234",taskList);
//        user2=new User(6,"Sidh","siddh@gmail.com","1234",taskList);
//        userList.add(user);
//        userList.add(user2);
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
//        user=null;
//        user2=null;
////        userTaskRepository.deleteAll();
//
//    }
//
//    @Test
//    public void TestAddNewUserSuccess() throws Exception {
//
//        when(userTaskService.addNewUser(any())).thenReturn(user);
//        mockMvc.perform(post("/task-manager/api/v1/register")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).addNewUser(any());
//
//    }
//
//    @Test
//    public void TestAddNewUserFailure() throws Exception {
//
//        when(userTaskService.addNewUser(any())).thenThrow(UserAlreadyExistsException.class);
//        mockMvc.perform(post("/task-manager/api/v1/register")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).addNewUser(any());
//
//    }
//
//    @Test
//    public void testUserLoginByEmailAndPasswordSuccess() throws Exception{
//
//        when(userTaskService.getUserByEmailAndPassword(anyString(), anyString())).thenReturn(user);
//        mockMvc.perform(post("/task-manager/api/v1/login")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(user)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).getUserByEmailAndPassword(anyString(),anyString());
//    }
//
//    @Test
//    public void testAddTaskToListSuccess() throws Exception{
//        when(userTaskService.addTasktoList(anyInt(),any())).thenReturn(task);
//        mockMvc.perform(post("/task-manager/api/v1/user/1/task")
//        .contentType(MediaType.APPLICATION_JSON)
//        .content(jsontoString(task)))
//        .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).addTasktoList(anyInt(),any());
//
//    }
//
//    @Test
//    public void testAddTaskToListFailure() throws Exception{
//        when(userTaskService.addTasktoList(anyInt(),any())).thenThrow(new TaskAlreadyExistsException());
//        mockMvc.perform(post("/task-manager/api/v1/user/1/task")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(task)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).addTasktoList(anyInt(),any());
//
//    }
//
//
//    @Test
//    public void testUpdateExistingTaskSuccess()throws Exception{
//
//        when(userTaskService.updateExistingTask(anyInt(),anyInt(),any())).thenReturn(task);
//        mockMvc.perform(put("/task-manager/api/v1/user/1/task/2")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsontoString(task)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//                verify(userTaskService,times(1)).updateExistingTask(anyInt(),anyInt(),any());
//    }
//
//    @Test
//    public void testDeleteExistingTask() throws Exception{
//
//        when(userTaskService.deleteExistingTask(anyInt(),anyInt())).thenReturn(true);
//        mockMvc.perform(delete("/task-manager/api/v1/user/1/task/01"))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(userTaskService,times(1)).deleteExistingTask(anyInt(),anyInt());
//    }
//
//
//
//
//
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
