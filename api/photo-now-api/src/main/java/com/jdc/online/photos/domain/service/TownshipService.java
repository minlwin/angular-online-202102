package com.jdc.online.photos.domain.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.Township;
import com.jdc.online.photos.domain.repo.TownshipRepo;

@Service
public class TownshipService extends AbstractService<Township, Integer>{

	private TownshipRepo tshRepo;
	
	public TownshipService(TownshipRepo repo) {
		super(repo);
		this.tshRepo = repo;
	}

	public List<Township> search(int district) {
		return tshRepo.findByDistrictId(district);
	}

}
