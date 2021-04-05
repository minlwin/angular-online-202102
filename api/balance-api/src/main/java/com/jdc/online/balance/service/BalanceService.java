package com.jdc.online.balance.service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.online.balance.entity.Balance;
import com.jdc.online.balance.entity.Balance.Type;
import com.jdc.online.balance.entity.BalanceDetails;
import com.jdc.online.balance.repo.BalanceDetailsRepo;
import com.jdc.online.balance.repo.BalanceRepo;

@Service
public class BalanceService extends AbstractService<Balance, Long>{
	
	@Autowired
	private BalanceDetailsRepo detailsRepo;

	public BalanceService(BalanceRepo repo) {
		super(repo);
	}

	@Override
	public Balance update(Long id, Balance data) {
		Balance result = findById(id);
		result.setCategory(data.getCategory());
		result.setTotal(data.getTotal());
		result.setType(data.getType());
		result.setUseDate(data.getUseDate());
		return result;
	}

	@Transactional
	public Balance save(long id, List<BalanceDetails> details) {
		Balance balance = findById(id);
		
		for(BalanceDetails d : details) {
			if(d.getId() == 0) {
				d.setBalance(balance);
				detailsRepo.save(d);
			} else {
				if(d.isDeleted()) {
					detailsRepo.delete(d);
				} else {
					detailsRepo.save(d);
				}
			}
		}
		
		List<BalanceDetails> list = detailsRepo.findByBalanceId(id);
		balance.setTotal(list.stream().mapToInt(a -> a.getAmount()).sum());
		return balance;
	}

	public List<BalanceDetails> findDetails(long id) {
		return detailsRepo.findByBalanceId(id);
	}

	public List<Balance> search(Type type, int category, LocalDate from, LocalDate to) {
		StringBuffer sb = new StringBuffer("select b from Balance b where 1 = 1");
		Map<String, Object> params = new HashMap<>();
		
		if(null != type) {
			sb.append(" and b.type = :type");
			params.put("type", type);
		}
		
		if(category > 0) {
			sb.append(" and b.category.id = :category");
			params.put("category", category);
		}

		if(null != from) {
			sb.append(" and b.useDate >= :from");
			params.put("from", from);
		}

		if(null != to) {
			sb.append(" and b.useDate <= :to");
			params.put("to", to);
		}

		return search(sb.toString(), params);
	}

	public List<BalanceDetails> searchDetails(Type type, int category, LocalDate from, LocalDate to) {
		StringBuffer sb = new StringBuffer("select b from BalanceDetails b where 1 = 1");
		Map<String, Object> params = new HashMap<>();
		
		if(null != type) {
			sb.append(" and b.balance.type = :type");
			params.put("type", type);
		}
		
		if(category > 0) {
			sb.append(" and b.balance.category.id = :category");
			params.put("category", category);
		}

		if(null != from) {
			sb.append(" and b.balance.useDate >= :from");
			params.put("from", from);
		}

		if(null != to) {
			sb.append(" and b.balance.useDate <= :to");
			params.put("to", to);
		}

		return detailsRepo.search(sb.toString(), params);
	}

}
