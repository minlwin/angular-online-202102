package com.jdc.online.photos.domain.repo;

import java.util.List;

import com.jdc.online.photos.domain.BaseRepository;
import com.jdc.online.photos.domain.entity.District;

public interface DistrictRepo extends BaseRepository<District, Integer>{

	List<District> findByStateId(int state);

}
