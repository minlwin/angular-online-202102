package com.jdc.online.location.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.jdc.online.location.entity.State;
import com.jdc.online.location.repo.StateRepo;

@Service
public class StateService extends AbstractService<State>{

	public StateService(StateRepo repo) {
		super(repo);
	}


	public List<State> search(String region, String name) {
		
		StringBuffer sb = new StringBuffer("select s from State s where 1 = 1");
		Map<String, Object> params = new HashMap<>();

		if(StringUtils.hasLength(region)) {
			sb.append(" and lower(s.region) like lower(:region)");
			params.put("region", region.concat("%"));
		}

		if(StringUtils.hasLength(name)) {
			sb.append(" and lower(s.name) like lower(:name)");
			params.put("name", name.concat("%"));
		}
		
		return repo.search(sb.toString(), params);
	}
	
	@Transactional
	public State update(int id, State state) {
		
		State old = findById(id);
		
		old.setCapital(state.getCapital());
		old.setName(state.getName());
		old.setMmName(state.getMmName());
		old.setRegion(state.getRegion());

		return old;
	}
}
