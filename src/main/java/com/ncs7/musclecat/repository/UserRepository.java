package com.ncs7.musclecat.repository;

import com.ncs7.musclecat.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {

	UserModel findByNo(Long no);
	UserModel findById(String id);
	UserModel findByIdAndPw(String id, String pw);

}
