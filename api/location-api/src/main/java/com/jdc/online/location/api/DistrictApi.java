package com.jdc.online.location.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.location.entity.District;
import com.jdc.online.location.service.DistrictService;

@RestController
@RequestMapping("district")
public class DistrictApi extends AbstractApi<District>{

	private DistrictService service;
	
	public DistrictApi(DistrictService service) {
		super(service);
		this.service = service;
	}
	
	@GetMapping
	public List<District> search(
			@RequestParam(required = false, defaultValue = "0") int state, 
			@RequestParam(required = false) String name) {
		return service.search(state, name);
	}

}
