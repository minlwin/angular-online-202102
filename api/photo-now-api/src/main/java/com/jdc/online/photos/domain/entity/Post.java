package com.jdc.online.photos.domain.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.annotation.CreatedDate;

import lombok.Data;

@Data
@Entity
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String nickName;
	private String description;
	@ElementCollection
	private List<String> photos = new ArrayList<>();
	
	@CreatedDate
	private LocalDateTime postDate;
	
	private int like;
	private int unlike;
}
