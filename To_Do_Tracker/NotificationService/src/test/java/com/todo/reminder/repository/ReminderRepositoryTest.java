package com.todo.reminder.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@DataMongoTest
@ExtendWith(SpringExtension.class)
public class ReminderRepositoryTest {
    
//    @Autowired
//    ReminderRepository reminderRepository;
//
//    User user1;
//    User user2;
//
//    Task task1;
//    Task task2;
//    Task task3;
//
//    @BeforeEach
//    void setUp() {
//        task1 = new Task(901, "task one", "this is task one", "2021-09-27", Priority.MEDIUM, "alpha", null, false);
//        task2 = new Task(902, "task two", "this is task two", "2021-09-22", Priority.HIGH, "beta", null, false);
//        task3 = new Task(903, "task three", "this is task three", "2021-10-01", Priority.LOW, "alpha", null, false);
//
//        user1 = new User(9001, "test user", "test@mail.com", "pass", List.of(task1, task3));
//        user2 = new User(9002, "test user", "test@mail.com", "pass", List.of(task2));
//
//        reminderRepository.insert(user1);
//        reminderRepository.insert(user2);
//    }
//
//    @AfterEach
//    void tearDown() {
//
//        reminderRepository.delete(user1);
//        reminderRepository.delete(user2);
//
//        task1 = null;
//        task2 = null;
//        task3 = null;
//
//        user1 = null;
//        user2 = null;
//    }
//
//    @Test
//    public void testFindByUserID() {
//        assertEquals(user1.getUserID(), reminderRepository.findById(9001).get().getUserID());
//        assertEquals(user2.getUserID(), reminderRepository.findById(9002).get().getUserID());
//    }
//
//    @Test
//    public void testFindByUserIDWithTasks() {
//        assertEquals(2, reminderRepository.findById(9001).get().getTasks().size());
//        assertEquals(1, reminderRepository.findById(9002).get().getTasks().size());
//    }
}
