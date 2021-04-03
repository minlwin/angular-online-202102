package com.jdc.online.location.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.jdc.online.location.entity.District;
import com.jdc.online.location.repo.DistrictRepo;

@Service
public class DistrictService extends AbstractService<District>{

	public DistrictService(DistrictRepo repo) {
		super(repo);
	}

	@Override
	@Transactional
	public District update(int id, District data) {
		District d = findById(id);
		d.setName(data.getName());
		return d;
	}

	public List<District> search(int state, String name) {
		StringBuffer sb = new StringBuffer("select d from District d where 1 = 1");
		Map<String, Object> params = new HashMap<>();

		if(state > 0) {
			sb.append(" and d.state.id = :state");
			params.put("state", state);
		}

		if(StringUtils.hasLength(name)) {
			sb.append(" and lower(d.name) like lower(:name)");
			params.put("name", name.concat("%"));
		}

		return repo.search(sb.toString(), params);
	}

}
