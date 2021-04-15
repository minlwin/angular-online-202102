package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jdc.online.photos.domain.entity.Post;
import com.jdc.online.photos.domain.service.PostService;

@RestController
@RequestMapping("post")
public class PostApi extends AbstractApi<Post, Long>{

	private PostService postService;
	
	public PostApi(PostService service) {
		super(service);
		this.postService = service;
	}
	
	@PostMapping("{id}/image")
	public Post uploadImage(@PathVariable long id, @RequestParam MultipartFile file) {
		return postService.uploadImage(id, file);
	}

}
