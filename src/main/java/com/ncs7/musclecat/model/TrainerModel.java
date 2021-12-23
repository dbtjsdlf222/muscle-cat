package com.ncs7.musclecat.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "trainer")
@Entity
@DynamicUpdate
@Getter
@Setter
public class TrainerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    private String name;
    private String phone;
    private String address;
    private String photo;
    @Column(name = "reg_date")
    private LocalDateTime regDate;

    @JoinColumn(name = "franchise_no")
    @ManyToOne
    private FranchiseModel franchise;
}