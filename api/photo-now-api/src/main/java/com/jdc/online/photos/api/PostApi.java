package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.Post;
import com.jdc.online.photos.domain.service.PostService;

@RestController
@RequestMapping("post")
public class PostApi extends AbstractApi<Post, Long>{

	public PostApi(PostService service) {
		super(service);
	}

}
