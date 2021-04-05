package com.jdc.online.balance.repo;

import java.util.List;

import com.jdc.online.balance.entity.BalanceDetails;

public interface BalanceDetailsRepo extends BaseRepository<BalanceDetails, Long> {

	List<BalanceDetails> findByBalanceId(long id);

}
