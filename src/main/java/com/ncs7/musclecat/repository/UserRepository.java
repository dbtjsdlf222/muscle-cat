package com.ncs7.musclecat.repository;

import com.ncs7.musclecat.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

	UserModel findByNo(Integer no);
	UserModel findById(String id);
	UserModel findByName(String name);

	UserModel findByIdAndPw(String id, String pw);

}
