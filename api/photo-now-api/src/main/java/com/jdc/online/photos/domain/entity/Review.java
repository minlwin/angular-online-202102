package com.jdc.online.photos.domain.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.data.annotation.LastModifiedDate;

import lombok.Data;

@Data
@Entity
public class Review {

	public enum Type {
		Like, Unlike
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	private Post post;
	
	private Type type;
	private String nickName;
	private String reason;
	
	@LastModifiedDate
	private LocalDateTime reviewTime;
}
