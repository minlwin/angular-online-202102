package com.jdc.online.photos.domain.repo;

import java.util.List;

import com.jdc.online.photos.domain.BaseRepository;
import com.jdc.online.photos.domain.entity.State;

public interface StateRepo extends BaseRepository<State, Integer>{

	List<State> findByRegion(String region);

}
