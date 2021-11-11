package com.ncs7.musclecat.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "users")
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

	@Column(name = "id",length = 16)
	private String id;

	@Column(name = "pw",length = 64)
	private String pw;
}