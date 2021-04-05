package com.jdc.online.photos.domain.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private LocalDateTime postDate;
	private String nickName;
	private String description;
	@ElementCollection
	private List<String> photos = new ArrayList<>();
	@ManyToOne
	private Township township;
	private String place;
	
	private int like;
	private int unlike;
}
