package com.todo.authentication.repository;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;


@DataJpaTest
@ExtendWith(SpringExtension.class)
@AutoConfigureTestDatabase(replace =  AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {


//    @Autowired
//    private UserRepository userRepository;
//    private User user,user2;
//    ArrayList<User> userList=new ArrayList<>();
//
//    @BeforeEach
//    public void setup(){
//
//        user=new User(5,"Siddhesh","sidh@gmail.com","1234");
//        user2=new User(6,"Sidh","siddh@gmail.com","1234");
//
//        userList.add(user);
//        userList.add(user2);
//
//    }
//
//    @AfterEach
//    public void tearDown(){
//
//       user=null;
//
//       user2=null;
//       userRepository.deleteAll();
//    }
//
//    @Test
//    public void saveUserReturnTrue(){
//
//     userRepository.save(user);
//     assertEquals(user.getUserID(),userRepository.findById(user.getUserID()).get().getUserID());
//
//    }
//    @Test
//    public void saveUserReturnFalse(){
//
//        userRepository.save(user);
//        assertNotEquals(user2.getUserID(),userRepository.findById(user.getUserID()).get().getUserID());
//
//    }
//    @Test
//    public void deleteUserReturnTrue(){
//        userRepository.save(user);
//        userRepository.delete(user);
//        assertEquals(Optional.empty(),userRepository.findById(user.getUserID()));
//
//    }
//    @Test
//    public void deleteUserReturnFalse(){
//        userRepository.save(user);
//        userRepository.delete(user);
//        assertNotEquals(user,userRepository.findById(user2.getUserID()));
//
//    }
//
//    @Test
//    public void getAllUsersReturnTrue(){
//
//       userRepository.save(user);
//       assertEquals(5,userRepository.findAll().size());
//    }
//
//    @Test
//    public void getAllUsersReturnFalse(){
//
//        userRepository.save(user);
//        userRepository.save(user2);
//        assertNotEquals(user,userRepository.findAll());
//    }
//
//    @Test
//    public void findUserByEmailAndPasswordTrue(){
//
//        userRepository.save(user);
//        userRepository.save(user2);
//        assertEquals(user,userRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword()));
//
//    }
//
//    @Test
//    public void findByEmailAndPasswordFalse(){
//
//        userRepository.save(user);
//        userRepository.save(user2);
//        assertNotEquals(user2,userRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword()));
//
//    }

}
