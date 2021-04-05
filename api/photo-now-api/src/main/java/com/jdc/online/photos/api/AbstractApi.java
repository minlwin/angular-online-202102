package com.jdc.online.photos.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jdc.online.photos.domain.AbstractService;

public abstract class AbstractApi<T, ID extends Number> {
	
	private AbstractService<T, ID> service;
	
	public AbstractApi(AbstractService<T, ID> service) {
		this.service = service;
	}
	
	@PostMapping
	public T create(@RequestBody T data) {
		return service.save(data);
	}

	
	@GetMapping("{id}")
	public T findById(@PathVariable ID id) {
		return service.findById(id);
	}
	
}
