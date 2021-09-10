package com.cognizant.miam.configurations;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
	private final Logger logger = LoggerFactory.getLogger(DataSourceConfig.class);
	private DataSourceBuilder dataSourceBuilder;

	@PostConstruct
	public void setup() {
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
		logger.info("Prod");
		dataSourceBuilder.url(System.getenv("PG_URL"));
		dataSourceBuilder.username(System.getenv("PG_USERNAME"));
		dataSourceBuilder.password(System.getenv("PG_PASSWORD"));
		return dataSourceBuilder.build();
	}
}

