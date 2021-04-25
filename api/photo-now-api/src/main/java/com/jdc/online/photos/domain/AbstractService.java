package com.jdc.online.photos.domain;

import java.util.List;
import java.util.Map;

public abstract class AbstractService<T, ID> {
	
	private BaseRepository<T, ID> repo;
	
	public AbstractService(BaseRepository<T, ID> repo) {
		this.repo = repo;
	}

	public T save(T data) {
		return repo.save(data);
	}

	public T findById(ID id) {
		return repo.findById(id).orElseThrow();
	}
	
	protected List<T> search(String jpql, Map<String, Object> params) {
		return repo.search(jpql, params);
	}

}
