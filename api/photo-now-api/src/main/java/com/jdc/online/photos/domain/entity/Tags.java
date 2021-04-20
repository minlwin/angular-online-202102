package com.jdc.online.photos.domain.entity;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Data;

@Entity
@Data
public class Tags {

	@Id
	private String tag;
	@ManyToMany
	private Set<Post> posts = new LinkedHashSet<>();
	
	private long postCounts;
}
