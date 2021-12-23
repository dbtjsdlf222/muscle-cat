package com.ncs7.musclecat.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "franchise")
@Entity
@Setter
@Getter
public class FranchiseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    @ManyToOne
    @JoinColumn(name = "center_no",referencedColumnName ="no")
    private CenterModel center;
    private String id;
    private String pw;
    private String address;
    private String telephone;
    private String email;
    @Column(name = "reg_date")
    @CreationTimestamp
    private LocalDateTime regDate;

    @OneToMany(mappedBy = "franchise",fetch = FetchType.LAZY)
    private List<TrainerModel> trainerModelList;

    @OneToOne(mappedBy = "franchise")
    private UserModel user;
}
