package com.cognizant.miam.configurations;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("prod")
public class ProductionDataceSourConfigImpl implements IDatasourceConfig {
    @Override
    public void setup() {
    }
}
