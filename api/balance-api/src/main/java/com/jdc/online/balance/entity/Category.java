package com.jdc.online.balance.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.jdc.online.balance.entity.Balance.Type;

import lombok.Data;

@Entity
@Data
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Type type;
	private String name;
}
