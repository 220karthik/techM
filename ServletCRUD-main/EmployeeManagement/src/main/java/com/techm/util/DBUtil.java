package com.techm.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DBUtil {
//Method to create database connection
	static Connection connection;
	public static Connection createConnection() {
		try {
			if (connection == null) {
				// Loading JDBC Driver
				Class.forName("com.mysql.cj.jdbc.Driver");
				// Create Connection
				String username = "root";
				String passsword = "admin";
				String url = "jdbc:mysql://localhost:3306/employeedb";
		connection = DriverManager.getConnection(url,username, passsword);
				return connection;
			} else {
				return connection;
			}
		} catch (ClassNotFoundException ce) {
			ce.printStackTrace();
			return null;
		} catch (SQLException se) {
			se.printStackTrace();
			return null;

		}
	}

}
