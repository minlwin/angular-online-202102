package com.jdc.online.location.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.location.entity.State;
import com.jdc.online.location.service.StateService;

@RestController
@RequestMapping("state")
public class StateApi extends AbstractApi<State>{

	private StateService service;

	public StateApi(StateService service) {
		super(service);
		this.service = service;
	}
	
	@GetMapping
	public List<State> search(
			@RequestParam(required = false) String region, 
			@RequestParam(required = false) String name) {
		return service.search(region, name);
	}		
}
