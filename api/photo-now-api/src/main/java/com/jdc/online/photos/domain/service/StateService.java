package com.jdc.online.photos.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.State;
import com.jdc.online.photos.domain.repo.StateRepo;

@Service
public class StateService extends AbstractService<State, Integer>{

	private StateRepo stateRepo;
	
	public StateService(StateRepo repo) {
		super(repo);
		this.stateRepo = repo;
	}

	public List<String> getRegions() {
		return stateRepo.findAll().stream()
				.map(a -> a.getRegion())
				.distinct()
				.collect(Collectors.toList());
	}

	public List<State> search(String region) {
		return stateRepo.findByRegion(region);
	}

}
