package com.jdc.online.location.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.jdc.online.location.entity.Township;
import com.jdc.online.location.repo.TownshipRepo;

@Service
public class TownshipService extends AbstractService<Township> {

	public TownshipService(TownshipRepo repo) {
		super(repo);
	}

	@Override
	@Transactional
	public Township update(int id, Township data) {
		Township t = findById(id);
		t.setName(data.getName());
		return t;
	}

	public List<Township> search(String region, int state, int district, String name) {
		StringBuffer sb = new StringBuffer("select t from Township t where 1 = 1");
		Map<String, Object> params = new HashMap<>();
		
		if(district > 0) {
			sb.append(" and t.district.id = :district");
			params.put("district", district);
		} else {
			if(state > 0) {
				sb.append(" and t.district.state.id = :state");
				params.put("state", state);
			} else {
				
				if(StringUtils.hasLength(region)) {
					sb.append(" and t.district.state.region = :region");
					params.put("region", region);
				}
			}
			
		}

		if(StringUtils.hasLength(name)) {
			sb.append(" and lower(t.name) like lower(:name)");
			params.put("name", name.concat("%"));
		}

		return repo.search(sb.toString(), params);
	}

}
