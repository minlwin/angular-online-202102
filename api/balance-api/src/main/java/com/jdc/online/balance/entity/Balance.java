package com.jdc.online.balance.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Balance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(nullable = false)
	private LocalDate useDate;
	@Column(nullable = false)
	private Type type;
	@Column(nullable = false)
	private String category;
	private int income;
	private int expance;
	private int incomeTotal;
	private int expanceTotal;
	
	public enum Type {
		Income, Expance
	}
}
