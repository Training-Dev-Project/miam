package com.cognizant.miam.dto;


public class UserDTO {
	private long id;
	private String name;
	private String email;
	private String password;

	public UserDTO() {
	}

	public UserDTO(long id, String name, String email, String password) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public static class Builder {
		private long id;
		private String name;
		private String email;
		private String password;

		public Builder() {
		}

		public static Builder newInstance() {
			return new Builder();
		}

		public Builder setName(String name) {
			this.name = name;
			return this;
		}

		public Builder setId(long id) {
			this.id = id;
			return this;
		}

		public Builder setEmail(String email) {
			this.email = email;
			return this;
		}

		public Builder setPassword(String password) {
			this.password = password;
			return this;
		}

		public UserDTO build() {
			UserDTO user = new UserDTO();
			user.setId(id);
			user.setEmail(this.email);
			user.setName(this.name);
			user.setPassword(this.password);
			return user;
		}


	}

}
