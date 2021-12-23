package com.ncs7.musclecat.vo;

import com.ncs7.musclecat.model.CenterModel;
import com.ncs7.musclecat.model.FranchiseModel;
import com.ncs7.musclecat.model.TrainerModel;
import com.ncs7.musclecat.model.UserModel;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AllInfoVO {
    private CenterModel centerModel;
    private TrainerModel trainerModel;
    private UserModel userModel;
    private FranchiseModel franchiseModel;
}