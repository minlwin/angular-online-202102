package com.jdc.online.balance.service;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Transactional;

import com.jdc.online.balance.repo.BaseRepository;

public abstract class AbstractService<T, ID extends Number> {
	
	private BaseRepository<T, ID> repo;
	
	public AbstractService(BaseRepository<T, ID> repo) {
		this.repo = repo;
	}

	@Transactional
	public abstract T update(ID id, T data);

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
