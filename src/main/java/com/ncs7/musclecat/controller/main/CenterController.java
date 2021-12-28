package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.CenterModel;
import com.ncs7.musclecat.model.FranchiseModel;
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
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/center")
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
        log.info("센터회원가입"+vo.getCenterModel().getName());
        log.info("id: "+vo.getFranchiseModel().getId()+"   pw: "+vo.getFranchiseModel().getPw());
        CenterModel b = centerRepository.findByBusinessNumber(vo.getCenterModel().getBusinessNumber());
        if(b == null){
            b = centerRepository.save(vo.getCenterModel());
        }
        vo.getFranchiseModel().setCenter(b);
        franchiseRepository.save(vo.getFranchiseModel());

        log.info(vo.getCenterModel().toString());
        log.info(vo.getFranchiseModel().toString());

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
