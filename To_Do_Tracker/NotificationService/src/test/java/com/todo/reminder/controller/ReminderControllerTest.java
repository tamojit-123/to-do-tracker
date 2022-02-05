package com.todo.reminder.controller;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ReminderControllerTest {
    
//    @Mock
//    ReminderService reminderService;
//
//    @Autowired
//    MockMvc mockMvc;
//
//    @InjectMocks
//    ReminderController reminderController;
//
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
//        mockMvc = MockMvcBuilders.standaloneSetup(reminderController).build();
//    }
//
//    @AfterEach
//    void tearDown() {
//        task1 = null;
//        task2 = null;
//        task3 = null;
//    }
//
//
//    @Test
//    public void testGetAllUserTasks() throws Exception {
//        when(reminderService.getPendingTasks(anyInt())).thenReturn(List.of(task1, task2, task3));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getPendingTasks(anyInt());
//    }
//
//    @Test
//    public void testGetTasksNearDue() throws Exception {
//        when(reminderService.getTasksWithNearDueDate(anyInt())).thenReturn(List.of(task1));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/neardue"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksWithNearDueDate(anyInt());
//    }
//
//    @Test
//    public void testGetTasksOverDue() throws Exception {
//        when(reminderService.getTasksWithOverDue(anyInt())).thenReturn(List.of(task2));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/overdue"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksWithOverDue(anyInt());
//    }
//
//    @Test
//    public void testGetTasksWithHighPriority() throws Exception {
//        when(reminderService.getTasksWithHighPriority(anyInt())).thenReturn(List.of(task2));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/high-priority"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksWithHighPriority(anyInt());
//    }
//
//    @Test
//    public void testGetTasksByCategory() throws Exception {
//        when(reminderService.getTasksByCategory(anyInt(), eq("alpha"))).thenReturn(List.of(task1, task3));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/category/alpha"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksByCategory(anyInt(), eq("alpha"));
//    }
//
//    @Test
//    public void testGetTasksSortedByDueDate() throws Exception {
//        when(reminderService.getTasksSortedByDueDate(anyInt())).thenReturn(List.of(task2, task1, task3));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/sorted-duedate"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksSortedByDueDate(anyInt());
//    }
//
//    @Test
//    public void testGetTasksSortedByPriority() throws Exception {
//        when(reminderService.getTasksSortedByPriorityLevel(anyInt())).thenReturn(List.of(task2, task1, task3));
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/task-reminder/api/v1/user/1001/tasks/sorted-priority"))
//                .andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
//
//        verify(reminderService, times(1)).getTasksSortedByPriorityLevel(anyInt());
//    }
}
