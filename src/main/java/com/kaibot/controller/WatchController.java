package com.kaibot.controller;

import com.kaibot.entity.Watch;
import com.kaibot.service.WatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by kaiak31 on 1/24/17.
 */
@RestController
@RequestMapping(path="/watches")
public class WatchController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    private WatchRepository watchService;

  @Autowired
  public WatchController(WatchRepository watchService){
    this.watchService = watchService;
  }

  @RequestMapping(path = "/list", method= RequestMethod.GET)
    public List<Watch> listWatches() {
      List<Watch> watchList = watchService.findAll();
      return watchList;
    }
}
