package com.jdc.online.location.service;

import com.jdc.online.location.repo.BaseRepository;

public abstract class AbstractService<T> {
	
	protected BaseRepository<T, Integer> repo;

	public AbstractService(BaseRepository<T, Integer> repo) {
		this.repo = repo;
	}
	
	public T save(T data) {
		return repo.save(data);
	}

	public T findById(int id) {
		return repo.findById(id).orElseThrow();
	}
	
	public abstract T update(int id, T data);

}
