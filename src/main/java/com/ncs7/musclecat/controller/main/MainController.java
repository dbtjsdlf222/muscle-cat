package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.UserModel;
import com.ncs7.musclecat.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("/")
@Slf4j  //log 라이브러리 검색추천
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("login")
    public ResponseEntity<String> login(@RequestParam String id,@RequestParam String pw) {
        log.info("로그인: "+id+"|"+pw);
        if(userRepository.findByIdAndPw(id, pw)!=null){
            return new ResponseEntity<String>("true", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("false", HttpStatus.OK);
        }
    }

    @PostMapping ("/join")
    public ResponseEntity<String> join(UserModel userModel) {
        log.info("회원가입");
        userRepository.save(userModel);
        return new ResponseEntity<String>( HttpStatus.OK);
    }
}
