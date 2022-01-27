package com.todo.archive.repository;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataMongoTest
@ExtendWith(SpringExtension.class)
public class TestTaskArchiveRepository {

//    @Autowired
//    private TaskArchiveRepository taskArchiveRepository;
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
//        taskArchiveRepository.save(task);
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
//        taskArchiveRepository.deleteAll();
//
//    }
//
//    @Test
//    public void saveArchiveTaskTrue(){
//
//        taskArchiveRepository.save(task);
//        assertEquals(task.getTaskID(),taskArchiveRepository.findById(task.getTaskID()).get().getTaskID());
//
//    }
//
//    @Test
//    public void saveArchiveTaskFalse(){
//
//        taskArchiveRepository.save(task);
//        assertNotEquals(task2.getTaskID(),taskArchiveRepository.findById(task.getTaskID()).get().getTaskID());
//
//    }
//
//    @Test
//    public void getAllArchiveTaskOfUserTrue(){
//
//        assertEquals(task.getTaskID(),taskArchiveRepository.findTaskByUserID(11).size());
//    }
//
//    @Test
//    public void getAllArchiveTaskOfUserFalse(){
//
//        assertNotEquals(task.getTaskID(),taskArchiveRepository.findTaskByUserID(12).size());
//        assertNotEquals(task2.getTaskID(),taskArchiveRepository.findTaskByUserID(11).size());
//    }
//    @Test
//    public void testDeleteTaskFromArchive(){
//        taskArchiveRepository.save(task);
//        taskArchiveRepository.delete(task);
//        assertEquals(0,taskArchiveRepository.findTaskByUserID(task.getUserID()).size());
//
//    }
//    @Test
//    public void testDeleteTaskFromArchiveFalse(){
//
//        taskArchiveRepository.save(task);
//        taskArchiveRepository.delete(task);
//        assertNotEquals(task,taskArchiveRepository.findTaskByUserID(task.getUserID()).size());
//
//    }


}
