import { Injectable } from '@angular/core';
import {Watch} from "./watch";
import {WatchQuery} from "./watch-query";

@Injectable()
export class WatchServiceService {
  lastId: number = 0;
  //watchList
  watches: Watch[] = [];
  constructor() {

  }
// Simulate GET /watch
  getAllWatches(): Watch[] {
    return this.watches;
  }
  // Simulate GET /todos/:id
  getWatchById(id: number): Watch {
    return this.watches
      .filter(watch => watch.sku === sku)
      .pop();
  }

  // Simulate GET /todos/:id
  getWatchByMake(make: string): Watch {
    return this.watches
      .filter(watch => watch.make === make)

    }

  getByCriteria(criteria: WatchQuery) {
    return this.watches
      .filter((watch) => {
        if(criteria.make !== undefined && criteria.make != watch.make){
          return false;
        }
        if(criteria.model !== undefined && criteria.model != watch.model){
          return false;
        }
        if(criteria.priceMax !== undefined && watch.price > criteria.priceMax){
          return false;
        }
        if(criteria.priceMin !== undefined && watch.price < criteria.priceMin ){
          return false;
        }
        return true;
      })
  }
}
