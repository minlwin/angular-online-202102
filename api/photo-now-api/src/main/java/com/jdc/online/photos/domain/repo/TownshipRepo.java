package com.jdc.online.photos.domain.repo;

import java.util.List;

import com.jdc.online.photos.domain.BaseRepository;
import com.jdc.online.photos.domain.entity.Township;

public interface TownshipRepo extends BaseRepository<Township, Integer>{

	List<Township> findByDistrictId(int district);

}
