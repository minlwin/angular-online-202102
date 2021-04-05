package com.jdc.online.balance.api;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.online.balance.entity.Balance;
import com.jdc.online.balance.entity.Balance.Type;
import com.jdc.online.balance.entity.BalanceDetails;
import com.jdc.online.balance.service.BalanceService;

@RestController
@RequestMapping("balance")
public class BalanceApi extends AbstractApi<Balance, Long>{

	private BalanceService service;
	
	public BalanceApi(BalanceService service) {
		super(service);
		this.service = service;
	}
	
	@GetMapping
	public List<Balance> search(
			@RequestParam(required = false) Type type, 
			@RequestParam(required = false, defaultValue = "0") int category, 
			@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")  LocalDate from, 
			@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")   LocalDate to) {
		return service.search(type, category, from, to);
	}
	
	@GetMapping("details")
	public List<BalanceDetails> searchDetails(
			@RequestParam(required = false) Type type, 
			@RequestParam(required = false, defaultValue = "0") int category, 
			@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")   LocalDate from, 
			@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")   LocalDate to) {
		return service.searchDetails(type, category, from, to);
	}

	@GetMapping("details/{id}")
	public List<BalanceDetails> getDetails(@PathVariable long id) {
		return service.findDetails(id);
	}
	
	@PostMapping("details/{id}")
	public Balance createDetails(
			@PathVariable long id, 
			@RequestBody List<BalanceDetails> details) {
		return service.save(id, details);
	}

	@PutMapping("details/{id}")
	public Balance updateDetails(
			@PathVariable long id, 
			@RequestBody List<BalanceDetails> details) {
		return service.save(id, details);
	}
}
