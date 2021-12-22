package com.ncs7.musclecat.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

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

	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.DETACH)
	@Column(name = "franchise_no",length = 16)
	private Integer franchiseNo;

	@Column(name = "id",length = 32)
	private String id;

	@Column(name = "pw",length = 32)
	private String pw;

	@Column(name = "email",length = 32)
	private String email;

	@Column(name = "photo",length = 32)
	private String photo;

	@Column(name = "reg_date",length = 32)
	private LocalDateTime regDate;
}