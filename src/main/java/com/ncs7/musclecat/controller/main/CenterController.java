package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.UserModel;
import com.ncs7.musclecat.repository.CenterRepository;
import com.ncs7.musclecat.repository.FranchiseRepository;
import com.ncs7.musclecat.repository.TrainerRepository;
import com.ncs7.musclecat.repository.UserRepository;
import com.ncs7.musclecat.vo.AllInfoVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/center")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class CenterController {

    @Autowired UserRepository userRepository;
    @Autowired CenterRepository centerRepository;
    @Autowired FranchiseRepository franchiseRepository;
    @Autowired TrainerRepository trainerRepository;

    @PostMapping("/join")
    public ResponseEntity<Boolean> joinCenter(AllInfoVO vo) {
        log.info("센터 회원가입");
        log.debug(vo.getCenterModel().getName());
        log.debug(vo.getFranchiseModel().getId()+" | "+vo.getFranchiseModel().getPw());

        centerRepository.save(vo.getCenterModel());
        franchiseRepository.save(vo.getFranchiseModel());

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
