package com.jdc.online.balance.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.balance.entity.Category;
import com.jdc.online.balance.service.CategoryService;

@RestController
@RequestMapping("category")
public class CategoryApi extends AbstractApi<Category, Integer>{
	
	private CategoryService service;

	public CategoryApi(CategoryService service) {
		super(service);
		this.service = service;
	}
	
	@GetMapping
	public List<Category> search(@RequestParam String name) {
		return service.search(name);
	}

}
