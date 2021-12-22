package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.UserModel;
import com.ncs7.musclecat.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/user")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/find/no/{no}")
    public ResponseEntity<UserModel> findUserByNo(int no) {
        return new ResponseEntity<UserModel>(userRepository.findByNo(no),HttpStatus.OK);
    }

    @GetMapping("/find/id/{id}")
    public ResponseEntity<UserModel> findUserById(String id) {
        return new ResponseEntity<UserModel>(userRepository.findById(id),HttpStatus.OK);
    }

    @GetMapping("/find/name/{name}")
    public ResponseEntity<UserModel> findUserByName(String name) {
        return new ResponseEntity<UserModel>(userRepository.findByName(name),HttpStatus.OK);
    }


}
