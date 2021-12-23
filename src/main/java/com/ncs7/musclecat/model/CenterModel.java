package com.ncs7.musclecat.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "center")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
public class CenterModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    private String name;
    private String businessNumber;

    @CreationTimestamp
    @Column(name = "reg_date")
    private LocalDateTime regDate;

    @OneToMany(mappedBy = "center",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<FranchiseModel> franchise;
}