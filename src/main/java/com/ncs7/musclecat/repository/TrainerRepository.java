package com.ncs7.musclecat.repository;

import com.ncs7.musclecat.model.CenterModel;
import com.ncs7.musclecat.model.TrainerModel;
import com.ncs7.musclecat.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<TrainerModel, Integer> {
	UserModel findByNo(Integer no);
	UserModel findByName(String name);
}