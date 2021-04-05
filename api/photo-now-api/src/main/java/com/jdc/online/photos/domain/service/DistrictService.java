package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.District;
import com.jdc.online.photos.domain.repo.DistrictRepo;

@Service
public class DistrictService extends AbstractService<District, Integer>{

	public DistrictService(DistrictRepo repo) {
		super(repo);
	}

}
