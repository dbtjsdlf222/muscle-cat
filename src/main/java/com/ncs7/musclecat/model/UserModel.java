package com.ncs7.musclecat.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Table(name = "user")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
public class UserModel {
	@Id
	@Column(name = "no")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long no;

	@Column(name = "name",length = 16)
	private String name;

	@Column(name = "id",length = 32)
	private String id;

	@Column(name = "pw",length = 32)
	private String pw;
}