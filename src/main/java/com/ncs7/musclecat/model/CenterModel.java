package com.ncs7.musclecat.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

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
    private Integer no;
    private String name;
    private String businessNumber;
    @CreationTimestamp
    private LocalDateTime regDate;
}