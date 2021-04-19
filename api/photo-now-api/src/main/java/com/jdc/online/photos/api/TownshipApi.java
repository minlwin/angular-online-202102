package com.jdc.online.photos.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.Township;
import com.jdc.online.photos.domain.service.TownshipService;

@RestController
@RequestMapping("township")
public class TownshipApi extends AbstractApi<Township, Integer>{

	
	private TownshipService townships;
	
	public TownshipApi(TownshipService service) {
		super(service);
		this.townships = service;
	}
	
	@GetMapping
	public List<Township> search(int district) {
		return townships.search(district);
	}

}
