package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.District;
import com.jdc.online.photos.domain.service.DistrictService;

@RestController
@RequestMapping("district")
public class DistrictApi extends AbstractApi<District, Integer>{

	public DistrictApi(DistrictService service) {
		super(service);
	}

}
