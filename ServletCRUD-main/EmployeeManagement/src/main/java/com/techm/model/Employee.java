package com.techm.model;
public class Employee {
	private String employeeName;
	private String employeeId;
	private String designation;
	private int totalExperience;
	private double salary;

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public int getTotalExperience() {
		return totalExperience;
	}

	public void setTotalExperience(int totalExperience) {
		this.totalExperience = totalExperience;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

}
