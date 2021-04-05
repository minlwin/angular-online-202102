package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.Township;
import com.jdc.online.photos.domain.service.TownshipService;

@RestController
@RequestMapping("township")
public class TownshipApi extends AbstractApi<Township, Integer>{

	public TownshipApi(TownshipService service) {
		super(service);
	}

}
