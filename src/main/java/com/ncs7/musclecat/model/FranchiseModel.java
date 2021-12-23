package com.ncs7.musclecat.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "franchise")
@Entity
@Data
public class FranchiseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    @JsonBackReference
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

    @JsonBackReference
    @OneToMany(mappedBy = "franchise",fetch = FetchType.LAZY)
    private List<TrainerModel> trainerModelList;

    @JsonBackReference
    @OneToOne(mappedBy = "franchise")
    private UserModel user;
}
