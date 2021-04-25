package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Review;
import com.jdc.online.photos.domain.repo.ReviewRepo;

@Service
public class ReviewService extends AbstractService<Review, Long>{

	public ReviewService(ReviewRepo repo) {
		super(repo);
	}

}
