package com.ncs7.musclecat.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name = "franchise")
@Entity
@Setter
@Getter
public class Franchise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    @Column(name = "center")
    @OneToMany
    @JoinColumn(name = "TrainerModel")
    private CenterModel center;private String id;
    private String pw;
    private String address;
    private String telephone;
    private String email;
    @Column(name = "reg_date")
    @CreationTimestamp
    private LocalDateTime regDate;
}