package com.jdc.online.photos.domain.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.District;
import com.jdc.online.photos.domain.repo.DistrictRepo;

@Service
public class DistrictService extends AbstractService<District, Integer>{

	private DistrictRepo distRepo;
	
	public DistrictService(DistrictRepo repo) {
		super(repo);
		this.distRepo = repo;
	}

	public List<District> search(int state) {
		return distRepo.findByStateId(state);
	}

}
