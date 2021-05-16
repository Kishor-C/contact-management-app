package com.org.model.beans;

public class ResponseMessages {
	private String message;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public ResponseMessages(String message) {
		super();
		this.message = message;
	}
	public ResponseMessages() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
