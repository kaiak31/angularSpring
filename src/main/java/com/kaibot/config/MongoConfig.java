package com.kaibot.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

/**
 * Created by kaiak31 on 1/25/17.
 */
@Configuration
public class MongoConfig extends AbstractMongoConfiguration {
  @Override
  protected String getDatabaseName() {
    return "watches";
  }

  @Override
  public Mongo mongo() throws Exception {
    return new MongoClient();
  }
}
