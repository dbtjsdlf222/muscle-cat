package com.ncs7.musclecat.controller.main;

import com.ncs7.musclecat.model.TrainerModel;
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
@RequestMapping("/trainer")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class TrainerController {

    @Autowired UserRepository userRepository;
    @Autowired CenterRepository centerRepository;
    @Autowired FranchiseRepository franchiseRepository;
    @Autowired TrainerRepository trainerRepository;

    @PostMapping("/join")
    public ResponseEntity<Boolean> joinTrainer(TrainerModel trainerModel,Integer centerNo) {
        log.info("Trainer 회원가입");
        log.debug(trainerModel.getName());

        trainerModel.getFranchise().getCenter().setNo(centerNo);
        trainerRepository.save(trainerModel);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity<Boolean> updateTrainer(TrainerModel trainerModel) {
        log.info("Trainer 수정");
        log.info(trainerModel.toString());
        trainerRepository.save(trainerModel);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{no}")
    public ResponseEntity<TrainerModel> findTrainerByNo(Integer no) {

        if(trainerRepository.findByNo(no) != null){
            return new ResponseEntity<TrainerModel>(trainerRepository.findByNo(no),HttpStatus.OK);
        } else {
            return new ResponseEntity<TrainerModel>(trainerRepository.findByNo(no),HttpStatus.BAD_REQUEST);
        }
    } //findTrainerByNo
}