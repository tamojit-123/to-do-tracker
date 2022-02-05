package com.todo.authentication.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
//   @Mock
//   private UserRepository userRepository;
//
//   @InjectMocks
//    private com.todo.authentication.service.UserServiceImpl userService;
//   private User user,user2;
//   List<User>userList;
//
//
//   @BeforeEach
//    void setUp(){
//       user=new User(1,"SidheshK","sidh12@gmail.com","123654");
//       user2=new User(2,"Srihari","sri01@gmail.com","654321");
//       userList= Arrays.asList(user,user2);
//
//   }
//
//    @AfterEach
//    public void tearUp(){
//
//       userList =null;
//        user=null;
//        user2=null;
//   }
//
//   @Test
//   public void givenUserToSaveReturnTrue() throws UserAlreadyExistsException {
//
//       when(userRepository.findById(user.getUserID())).thenReturn(Optional.ofNullable(null));
//       when(userRepository.save(any())).thenReturn(user);
//
//        assertEquals(user,userService.saveNewUser(user));
//        verify(userRepository,times(1)).save(any());
//       verify(userRepository,times(1)).findById(any());
//   }
//
//   @Test
//  public void givenUserToSaveReturnFalse() throws UserAlreadyExistsException {
//
//        when(userRepository.findById(user.getUserID())).thenReturn(Optional.ofNullable(user));
//        assertThrows(UserAlreadyExistsException.class,()->userService.saveNewUser(user));
//
//        verify(userRepository,times(0)).save(any());
//        verify(userRepository,times(1)).findById(any());
//    }
//
//    @Test
//    public void getUserByEmailAndPasswordTrue() throws UserNotFoundException {
//
//        when(userRepository.findUserByEmailAndPassword(anyString(), anyString())).thenReturn(user);
//        userRepository.save(user);
//        assertEquals(user.getUserID(),userService.getUserByEmailAndPassword("sidh12@gmail.com","123654").getUserID());
//        verify(userRepository,times(1)).findUserByEmailAndPassword(any(),any());
//
//    }
//
//    @Test
//    public void getUserByEmailAndPasswordFalse() throws UserNotFoundException {
//
//        when(userRepository.findUserByEmailAndPassword(anyString(), anyString())).thenReturn(user);
//        userRepository.save(user);
//        assertNotEquals(user2.getUserID(),userService.getUserByEmailAndPassword("sidh12@gmail.com","123654").getUserID());
//        verify(userRepository,times(1)).findUserByEmailAndPassword(any(),any());
//
//    }
//
//    @Test
//    public void getLatestUserIDTestTrue(){
//
//       when(userRepository.findAll()).thenReturn(userList);
//       userRepository.save(user);
//       userRepository.save(user2);
//       assertEquals(user2.getUserID(),userService.getLatestUserID());
//       verify(userRepository,times(1)).findAll();
//
//    }
//
//    @Test
//    public void getLatestUserIDTestFalse(){
//
//        when(userRepository.findAll()).thenReturn(userList);
//        userRepository.save(user);
//        userRepository.save(user2);
//        assertNotEquals(user.getUserID(),userService.getLatestUserID());
//        verify(userRepository,times(1)).findAll();
//
//    }


}
