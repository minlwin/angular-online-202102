package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.photos.domain.entity.Tags;
import com.jdc.online.photos.domain.service.TagsService;

@RestController
@RequestMapping("tags")
public class TagsApi extends AbstractApi<Tags, String>{

	public TagsApi(TagsService service) {
		super(service);
	}

}
