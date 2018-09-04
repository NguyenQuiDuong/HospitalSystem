package com.hospital.models;

import java.math.BigInteger;


public class EmployeeStatatistic {
	
	private String type;
	private BigInteger number;
	
	public EmployeeStatatistic() {
		
	}
	
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public BigInteger getNumber() {
		return number;
	}
	public void setNumber(BigInteger number) {
		this.number = number;
	}

}
