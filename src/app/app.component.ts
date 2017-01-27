import { Component } from '@angular/core';
import { WatchServiceService } from './watch-service.service';
import {Watch} from "./watch";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WatchServiceService]
})


export class AppComponent {
  title = 'Watches!';

  constructor(private service: WatchServiceService) {
    service.watches.push( {
      make:'Swatch',
      model:'Classic',
      sku:'swCls1002',
      price:530.00,
      warranty:12,
    });
  }

  // Service is now available as this.todoDataService
  watches(watch) {
    console.log("Hi");
    return this.service.getAllWatches();
  }
}
