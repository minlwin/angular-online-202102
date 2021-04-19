package com.jdc.online.photos.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.District;
import com.jdc.online.photos.domain.service.DistrictService;

@RestController
@RequestMapping("district")
public class DistrictApi extends AbstractApi<District, Integer> {
	
	private DistrictService districts;

	public DistrictApi(DistrictService service) {
		super(service);
		this.districts = service;
	}

	@GetMapping
	public List<District> search(int state) {
		return districts.search(state);
	}

}
