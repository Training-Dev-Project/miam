package com.cognizant.miam.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.io.*;
import java.util.Locale;
import java.util.Properties;

@Configuration
public class DataSourceConfig {
    @Autowired
    private Environment env;
    private DataSourceBuilder dataSourceBuilder;
    private Properties prop = null;
    private String osName = "";

    @PostConstruct
    public void setup(){
        prop = new Properties();
        dataSourceBuilder = DataSourceBuilder.create();
        osName= System.getProperty("os.name");
        String repoUser = env.getProperty("HOME");

        if((osName.toUpperCase()).startsWith("WINDOWS")) {
            repoUser = env.getProperty("USERPROFILE");
        }

        try (InputStream input = new FileInputStream(repoUser +"/.miam.properties")) {
            prop = new Properties();
            prop.load(input);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @Bean
    @Profile("dev")
    public DataSource getDevDataSource() {
        dataSourceBuilder.url(prop.getProperty("PG_URL"));
        dataSourceBuilder.username(prop.getProperty("PG_USERNAME"));
        dataSourceBuilder.password(prop.getProperty("PG_PASSWORD"));
        return dataSourceBuilder.build();
    }

    @Bean
    @Profile("prod")
    public DataSource getProdDataSource() {
        dataSourceBuilder.url(env.getProperty("PG_URL"));
        dataSourceBuilder.username(env.getProperty("PG_USERNAME"));
        dataSourceBuilder.password(env.getProperty("PG_PASSWORD"));
        return dataSourceBuilder.build();
    }
}

