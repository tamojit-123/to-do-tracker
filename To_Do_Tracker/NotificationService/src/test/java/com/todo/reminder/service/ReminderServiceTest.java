package com.todo.reminder.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ReminderServiceTest {
    
//    @Mock
//    ReminderRepository reminderRepo;
//
//    @InjectMocks
//    ReminderServiceImpl reminderService;
//
//    User user;
//    Task task1;
//    Task task2;
//    Task task3;
//
//    @BeforeEach
//    void setUp() {
//        task1 = new Task(901, "task one", "this is task one", "2021-09-27", Priority.MEDIUM, "alpha", null, false);
//        task2 = new Task(902, "task two", "this is task two", "2021-09-22", Priority.HIGH, "beta", null, false);
//        task3 = new Task(903, "task three", "this is task three", "2021-10-01", Priority.LOW, "alpha", null, false);
//        user = new User(9001, "test user", "test@mail.com", "pass", List.of(task1, task2, task3));
//    }
//
//    @AfterEach
//    void tearDown() {
//        task1 = null;
//        task2 = null;
//        task3 = null;
//        user = null;
//    }
//
//    @Test
//    public void testGetAllUserTasks() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals(3, reminderService.getPendingTasks(anyInt()).size());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksNearDue() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals(1, reminderService.getTasksWithNearDueDate(anyInt()).size());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksWithHighPriority() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals(1, reminderService.getTasksWithHighPriority(anyInt()).size());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksOverdue() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals(1, reminderService.getTasksWithOverDue(anyInt()).size());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksByCategory() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals(2, reminderService.getTasksByCategory(anyInt(), "alpha").size());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksSortedByDueDate() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals("2021-09-22", reminderService.getTasksSortedByDueDate(anyInt()).get(0).getDueDate());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//    @Test
//    public void testGetTasksSortedByPriority() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.of(user));
//
//        assertEquals("HIGH", reminderService.getTasksSortedByPriorityLevel(anyInt()).get(0).getPriorityLevel().toString());
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
//
//
//    @Test
//    public void testGetTasksFailureDueToUserNotFoundException() throws UserNotFoundException {
//        when(reminderRepo.findById(anyInt())).thenReturn(Optional.ofNullable(null));
//
//        assertThrows(UserNotFoundException.class, () -> reminderService.getPendingTasks(anyInt()));
//
//        verify(reminderRepo, times(1)).findById(anyInt());
//    }
}
