package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.Review;
import com.jdc.online.photos.domain.service.ReviewService;

@RestController
@RequestMapping("review")
public class ReviewApi extends AbstractApi<Review, Long>{

	public ReviewApi(ReviewService service) {
		super(service);
	}

}
