package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.UserModel;
import com.ncs7.musclecat.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("/")
@Slf4j  //log 라이브러리 검색추천
public class MainController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("login")
    public ResponseEntity<String> login(@RequestParam String id,@RequestParam String pw) {
        userRepository.findByIdAndPw(id, pw);
        return new ResponseEntity<String>("API 성공", HttpStatus.OK);
    }

}
