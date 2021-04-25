package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Tags;
import com.jdc.online.photos.domain.repo.TagsRepo;

@Service
public class TagsService extends AbstractService<Tags, String>{

	public TagsService(TagsRepo repo) {
		super(repo);
	}

}
