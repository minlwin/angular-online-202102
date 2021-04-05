package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Post;
import com.jdc.online.photos.domain.repo.PostRepo;

@Service
public class PostService extends AbstractService<Post, Long>{

	public PostService(PostRepo repo) {
		super(repo);
	}

}
