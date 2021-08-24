package com.cognizant.miam.dto;


public class UserDTO {
    private String name;
    private String email;
    private String password;

    public UserDTO() {
    }

    public UserDTO(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public static class Builder {
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
            user.setEmail(this.email);
            user.setName(this.name);
            user.setPassword(this.password);
            return user;
        }


    }

}
