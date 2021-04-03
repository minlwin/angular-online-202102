package com.jdc.online.location.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.location.entity.Township;
import com.jdc.online.location.service.TownshipService;

@RestController
@RequestMapping("township")
public class TownshipApi extends AbstractApi<Township>{

	private TownshipService service;
	
	public TownshipApi(TownshipService service) {
		super(service);	
		this.service = service;
	}
	
	@GetMapping
	public List<Township> search(
			@RequestParam(required = false, defaultValue = "0") int state, 
			@RequestParam(required = false, defaultValue = "0") int district, 
			@RequestParam(required = false) String name) {
		return service.search(state, district, name);
	}
	
}
