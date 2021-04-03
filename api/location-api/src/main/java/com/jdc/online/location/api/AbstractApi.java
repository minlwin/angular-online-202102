package com.jdc.online.location.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jdc.online.location.service.AbstractService;

public abstract class AbstractApi<T> {
	
	private AbstractService<T> service;
	
	public AbstractApi(AbstractService<T> service) {
		this.service = service;
	}

	@PostMapping
	public T create(@RequestBody T state) {
		return service.save(state);
	}
	
	@PutMapping("{id}")
	public T update(@PathVariable int id,@RequestBody T state) {
		return service.update(id, state);
	}

		
	@GetMapping("{id}")
	public T findById(@PathVariable int id) {
		return service.findById(id);
	}
}
