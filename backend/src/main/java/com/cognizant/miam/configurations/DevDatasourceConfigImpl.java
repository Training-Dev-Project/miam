package com.cognizant.miam.configurations;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DevDatasourceConfigImpl implements IDatasourceConfig {
    private static Logger log = LoggerFactory.getLogger(DevDatasourceConfigImpl.class);
    @Override
    public void setup() {
        log.info("Dev profile: ******** annotated method is called. ************");
    }
}
