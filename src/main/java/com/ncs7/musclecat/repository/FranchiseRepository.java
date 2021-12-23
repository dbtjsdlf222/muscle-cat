package com.ncs7.musclecat.repository;

import com.ncs7.musclecat.model.FranchiseModel;
import com.ncs7.musclecat.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FranchiseRepository extends JpaRepository<FranchiseModel, Integer> {
	UserModel findByNo(Integer no);
	UserModel findById(String id);
}
