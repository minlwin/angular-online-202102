package com.jdc.online.photos.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Post;
import com.jdc.online.photos.domain.repo.PostRepo;

@Service
public class PostService extends AbstractService<Post, Long>{
	
	@Autowired
	private ImageSaveService imageService;

	public PostService(PostRepo repo) {
		super(repo);
	}
	
	@Transactional
	public Post uploadImage(long id, MultipartFile file) {
		Post post = findById(id);
		
		String imagePath = imageService.saveImage(file);
		
		if(null != imagePath) {
			post.getPhotos().add(imagePath);
		}
		
		return post;
	}

}
