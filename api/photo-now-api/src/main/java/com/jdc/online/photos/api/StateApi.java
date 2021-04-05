package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.State;
import com.jdc.online.photos.domain.service.StateService;

@RestController
@RequestMapping("state")
public class StateApi extends AbstractApi<State, Integer>{

	public StateApi(StateService service) {
		super(service);
	}

}
