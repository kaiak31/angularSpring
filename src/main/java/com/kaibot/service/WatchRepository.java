package com.kaibot.service;

import com.kaibot.entity.Watch;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by kaiak31 on 1/25/17.
 */
public interface WatchRepository extends MongoRepository<Watch, String> {

}
