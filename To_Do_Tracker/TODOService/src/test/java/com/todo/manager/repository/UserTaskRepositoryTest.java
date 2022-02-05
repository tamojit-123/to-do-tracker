package com.todo.manager.repository;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@DataMongoTest
@ExtendWith(SpringExtension.class)
public class UserTaskRepositoryTest {

//    @Autowired
//    private UserTaskRepository userTaskRepository;
//    private Image image,image2;
//    private Priority priority;
//    private Task task,task2;
//    private User user,user2;
//    List<Task> taskList = new ArrayList<>();
//    List<Image> imageList = new ArrayList<>();
//    ArrayList<User> userList=new ArrayList<>();
//
//
//    @BeforeEach
//    public void setUp(){
//
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
//        userTaskRepository.deleteAll();
//
//    }
//
//    @Test
//    public void saveUserReturnTrue(){
//
//        userTaskRepository.save(user);
//        assertEquals(user.getUserID(),userTaskRepository.findById(user.getUserID()).get().getUserID());
//
//    }
//    @Test
//    public void saveUserReturnFalse(){
//
//        userTaskRepository.save(user);
//        assertNotEquals(user2.getUserID(),userTaskRepository.findById(user.getUserID()).get().getUserID());
//
//    }
//    @Test
//    public void deleteUserReturnTrue(){
//        userTaskRepository.save(user);
//        userTaskRepository.delete(user);
//        assertEquals(Optional.empty(),userTaskRepository.findById(user.getUserID()));
//
//    }
//    @Test
//    public void deleteUserReturnFalse(){
//        userTaskRepository.save(user);
//        userTaskRepository.delete(user);
//        assertNotEquals(user,userTaskRepository.findById(user2.getUserID()));
//
//    }
//
//    @Test
//    public void getAllUsersReturnTrue(){
//
//        userTaskRepository.save(user);
//        userTaskRepository.save(user2);
//        assertEquals(userList,userTaskRepository.findAll());
//    }
//
//    @Test
//    public void getAllUsersReturnFalse(){
//
//        userTaskRepository.save(user);
//        userTaskRepository.save(user2);
//        assertNotEquals(user,userTaskRepository.findAll());
//    }
//
//    @Test
//    public void findUserByEmailAndPasswordTrue(){
//
//        userTaskRepository.save(user);
//        userTaskRepository.save(user2);
//        assertEquals(user,userTaskRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword()));
//
//    }
//
//    @Test
//    public void findByEmailAndPasswordFalse(){
//
//        userTaskRepository.save(user);
//        userTaskRepository.save(user2);
//        assertNotEquals(user2,userTaskRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword()));
//
//    }
}
