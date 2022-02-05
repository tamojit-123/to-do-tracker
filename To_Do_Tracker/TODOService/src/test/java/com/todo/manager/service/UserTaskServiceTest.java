package com.todo.manager.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;


@ExtendWith(MockitoExtension.class)
public class UserTaskServiceTest {

//    @Mock
//    private UserTaskRepository userTaskRepository;
//
//    @InjectMocks
//    private UserTaskServiceImpl userTaskService;
//
//
//    @Autowired
//    private Image image,image2;
//    private Priority priority;
//    private Task task,task2;
//    private User user,user2;
//    List<Task> taskList = new ArrayList<>();
//    List<Image> imageList = new ArrayList<>();
//    ArrayList<User> userList=new ArrayList<>();
//
//    @BeforeEach
//    public void setUp(){
//
////        mockMvc= MockMvcBuilders.standaloneSetup(userTaskController).build();
//        image= new Image("1","task.img");
//        image2=new Image("2","task2.img");
//        imageList.add(image);
//        imageList.add(image2);
//        task=new Task(01,"Dummy","testing","01/01/2021", Priority.HIGH,"xyz",true,imageList);
//        task2=new Task(02,"Dummy2","testing2","02/02/2021",Priority.LOW,"abc",true,imageList);
//        user=new User(5,"Siddhesh","sidh@gmail.com","1234",List.of(task, task2));
//        user2=new User(6,"Sidh","siddh@gmail.com","1234",List.of(task2));
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
//    public void testAddNewUserSuccess() throws Exception{
//
//        when(userTaskRepository.findById(user.getUserID())).thenReturn(Optional.ofNullable(null));
//        when(userTaskRepository.insert(any(User.class))).thenReturn(user);
//        assertEquals(user,userTaskService.addNewUser(user));
//        verify(userTaskRepository,times(1)).insert(any(User.class));
//        verify(userTaskRepository,times(1)).findById(any());
//
//    }
//
//    @Test
//    public void testGetUserByEmailAndPasswordSuccess() throws Exception{
//
//        when(userTaskRepository.findUserByEmailAndPassword(anyString(),anyString())).thenReturn(user);
//        userTaskRepository.save(user);
//        assertEquals(user.getUserID(),userTaskService.getUserByEmailAndPassword(anyString(),anyString()).getUserID());
//        verify(userTaskRepository,times(1)).findUserByEmailAndPassword(any(),any());
//    }
//
//    @Test
//    public void testAddTaskToListSuccess() throws Exception{
//
//        when(userTaskRepository.findById(anyInt())).thenReturn(Optional.of(user2));
//        when(userTaskRepository.save(any(User.class))).thenReturn(user2);
//        assertEquals(task.getTaskID(),userTaskService.addTasktoList(anyInt(),task));
//        verify(userTaskRepository,times(1)).save(any(User.class));
//
//    }
//
//    @Test
//    public void testUpdateExistingTaskSuccess()throws Exception{
//
//        when(userTaskRepository.findById(task.getTaskID())).thenReturn(Optional.of(user));
//        userTaskRepository.save(user);
//        assertEquals(task.getTaskID(),userTaskService.updateExistingTask(anyInt(),anyInt(),task));
//        verify(userTaskRepository,times(1)).save(any(User.class));
//
//
//    }
//
//    @Test
//    public void testDeleteExistingTaskSuccess()throws Exception{
//
//        when(userTaskRepository.findById(task.getTaskID())).thenReturn(any());
//        when(userTaskRepository.save(any(User.class))).thenReturn(user);
//        assertEquals(task.getTaskID(),userTaskService.updateExistingTask(anyInt(),anyInt(),task));
//        verify(userTaskRepository,times(1)).save(any(User.class));
//
//
//    }


}
