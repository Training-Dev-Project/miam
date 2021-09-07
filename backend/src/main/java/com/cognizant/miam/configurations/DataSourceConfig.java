package com.cognizant.miam.configurations;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
    private DataSourceBuilder dataSourceBuilder;

    @PostConstruct
    public void setup(){
        dataSourceBuilder = DataSourceBuilder.create();
    }

    @Bean
    @Profile("dev")
    public DataSource getDevDataSource() {
        dataSourceBuilder.url(System.getenv("PG_URL"));
        dataSourceBuilder.username(System.getenv("PG_USERNAME"));
        dataSourceBuilder.password(System.getenv("PG_PASSWORD"));
        return dataSourceBuilder.build();
    }

    @Bean
    @Profile("prod")
    public DataSource getProdDataSource() {
        System.out.println("Prod");
        dataSourceBuilder.url(System.getenv("PG_URL"));
        dataSourceBuilder.username(System.getenv("PG_USERNAME"));
        dataSourceBuilder.password(System.getenv("PG_PASSWORD"));
        return dataSourceBuilder.build();
    }
}

