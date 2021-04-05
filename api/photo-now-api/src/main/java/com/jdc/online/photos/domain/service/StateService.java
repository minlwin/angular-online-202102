package com.jdc.online.photos.domain.service;

import org.springframework.stereotype.Service;

import com.jdc.online.photos.domain.AbstractService;
import com.jdc.online.photos.domain.entity.State;
import com.jdc.online.photos.domain.repo.StateRepo;

@Service
public class StateService extends AbstractService<State, Integer>{

	public StateService(StateRepo repo) {
		super(repo);
	}

}
