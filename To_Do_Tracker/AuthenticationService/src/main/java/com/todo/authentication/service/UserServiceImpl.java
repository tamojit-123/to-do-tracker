package com.todo.authentication.service;

import java.util.List;
import java.util.Optional;

import com.todo.authentication.model.User;
import com.todo.authentication.exception.UserAlreadyExistsException;
import com.todo.authentication.exception.UserNotFoundException;
import com.todo.authentication.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveNewUser(User user) throws UserAlreadyExistsException {
        Optional<User> user2 = userRepository.findById(user.getUserID());
        if (user2.isEmpty()) {
            return userRepository.save(user);
        }
        throw new UserAlreadyExistsException();
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException {
        User user = userRepository.findUserByEmailAndPassword(email, password);
        if (user == null) {
            throw new UserNotFoundException();
        }
        return user;
    }

    @Override
    public int getLatestUserID() {
        List<User> allUsers = userRepository.findAll();
        if (allUsers.size() == 0) {
            return 1000;
        }
        allUsers.sort((u1, u2) -> u1.getUserID() - u2.getUserID());
        User latestUser = allUsers.get(allUsers.size() - 1);
        return latestUser.getUserID();
    }


}
