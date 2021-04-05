package com.jdc.online.balance.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.jdc.online.balance.entity.Category;
import com.jdc.online.balance.repo.CategoryRepo;

@Service
public class CategoryService extends AbstractService<Category, Integer>{

	public CategoryService(CategoryRepo repo) {
		super(repo);
	}

	@Override
	public Category update(Integer id, Category data) {
		Category result = findById(id);
		result.setName(data.getName());
		return result;
	}

	public List<Category> search(String name) {
		
		StringBuffer sb = new StringBuffer("select c from Xategory c where 1 = 1");
		Map<String, Object> params = new HashMap<>();
		
		if(StringUtils.hasLength(name)) {
			sb.append(" and lower(c.name) like lower(:name)");
			params.put("name", name.concat("%"));
		}
		
		return search(sb.toString(), params);
	}

}
