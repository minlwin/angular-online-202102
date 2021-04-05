package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Township;
import com.jdc.online.photos.domain.repo.TownshipRepo;

@Service
public class TownshipService extends AbstractService<Township, Integer>{

	public TownshipService(TownshipRepo repo) {
		super(repo);
	}

}
