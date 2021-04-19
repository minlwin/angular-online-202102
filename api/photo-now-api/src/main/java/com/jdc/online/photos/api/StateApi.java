package com.jdc.online.photos.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.State;
import com.jdc.online.photos.domain.service.StateService;

@RestController
@RequestMapping("state")
public class StateApi extends AbstractApi<State, Integer>{

	private StateService states;
	
	public StateApi(StateService service) {
		super(service);
		this.states = service;
	}
	
	@GetMapping("region")
	public List<String> regions() {
		return states.getRegions();
	}
	
	@GetMapping
	public List<State> search(@RequestParam String region) {
		return states.search(region);
	}

}
