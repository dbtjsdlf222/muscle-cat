package com.ncs7.musclecat.repository;

import com.ncs7.musclecat.model.CenterModel;
import com.ncs7.musclecat.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CenterRepository extends JpaRepository<CenterModel, Integer> {

	CenterModel findByNo(Integer no);
	CenterModel findByName(String name);

}
