package com.jdc.online.balance.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import lombok.Data;

@Data
@Entity
public class BalanceDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@ManyToOne(optional = false)
	private Balance balance;
	private String reason;
	private String details;
	private int amount;
	@Transient
	private boolean deleted;
}
