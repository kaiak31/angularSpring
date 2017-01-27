/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WatchServiceService } from './watch-service.service';
import {Watch} from "./watch";
import {WatchQuery} from "./watch-query";

describe('WatchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchServiceService]
    });
  });

  it('should ...', inject([WatchServiceService], (service: WatchServiceService) => {
    expect(service).toBeTruthy();
  }));

  describe( '#getALLWatches', () =>{
    it('should return an empty array by default', inject([WatchServiceService], (service: WatchServiceService) => {
      expect(service.getAllWatches()).toEqual([]);
    }));

    it('should return all todos', inject([WatchServiceService], (service: WatchServiceService) => {
      let watch1 = new Watch({
        make:'Swatch',
        model:'Classic',
        sku:'swCls10022',
        price:500.00,
        warranty:12,
      });
      let watch2 = new Watch({
        make:'Rolex',
        model:'Gold',
        sku:'aklsjdaklsj',
        price:10000.00,
        warranty:12,
      });
      service.watches.push(watch1,watch2);
      expect(service.getAllWatches()).toEqual([watch1, watch2]);
    }));

  });
  describe( '#getByCriteriaMake', () =>{

    it('should return make todos', inject([WatchServiceService], (service: WatchServiceService) => {
        let watch1 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls10022',
          price:500.00,
          warranty:12,
        });

        let watch2 = new Watch({
          make:'Rolex',
          model:'Gold',
          sku:'aklsjdaklsj',
          price:10000.00,
          warranty:12,
        });
          let watch3 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls1002',
          price:530.00,
          warranty:12,
        });
        service.watches.push(watch1,watch2,watch3);
        let watchQuery= new WatchQuery({ make:'Swatch'});
        let result = service.getByCriteria(watchQuery);
        expect(result[0].make).toEqual(watch1.make);
        expect(result.length).toEqual(2);

    }));
  });

  describe( '#getByPrice', () =>{
    describe( 'A Max Price is used but no min price', () => {
      let service;
      beforeEach(inject([WatchServiceService], (WatchServiceService) => {
        service = WatchServiceService;
        let watch1 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls10022',
          price:500.00,
          warranty:12,
        });

        let watch2 = new Watch({
          make:'Rolex',
          model:'Gold',
          sku:'aklsjdaklsj',
          price:10000.00,
          warranty:12,
        });
        let watch3 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls1002',
          price:530.00,
          warranty:12,
        });
        service.watches.push(watch1,watch2,watch3);
      }));
      it('should return watches whose prices is less than or equal to the Price Max', () => {
        let watchQuery= new WatchQuery({ priceMax: 529.00});
        let results = service.getByCriteria(watchQuery);
        expect(results.every((watch) => watch.price <= watchQuery.priceMax));
      });

    });
    describe( 'A Min Price is used but no max price', () => {
      let service;
      beforeEach(inject([WatchServiceService], (WatchServiceService) => {
        service = WatchServiceService;
        let watch1 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls10022',
          price:500.00,
          warranty:12,
        });

        let watch2 = new Watch({
          make:'Rolex',
          model:'Gold',
          sku:'aklsjdaklsj',
          price:10000.00,
          warranty:12,
        });
        let watch3 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls1002',
          price:530.00,
          warranty:12,
        });
        service.watches.push(watch1,watch2,watch3);
      }));
      it('should return watches whose prices is greater than or equal to the Price Min', inject([WatchServiceService], (service: WatchServiceService) => {
        let watchQuery= new WatchQuery({ priceMin: 529.00});
        let results = service.getByCriteria(watchQuery);
        expect(results.every((watch) => watch.price >= watchQuery.priceMin));
        expect(results.length).toEqual(2);

      }));
    });

    describe( 'A Min Price is used and Max price is used', () => {
      let service;
      beforeEach(inject([WatchServiceService], (WatchServiceService) => {
        service = WatchServiceService;
        let watch1 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls10022',
          price:500.00,
          warranty:12,
        });

        let watch2 = new Watch({
          make:'Rolex',
          model:'Gold',
          sku:'aklsjdaklsj',
          price:10000.00,
          warranty:12,
        });
        let watch3 = new Watch({
          make:'Swatch',
          model:'Classic',
          sku:'swCls1002',
          price:530.00,
          warranty:12,
        });
        service.watches.push(watch1,watch2,watch3);
      }));
      it('should return watches whose prices is greater than or equal to the Price Min AND less than or equal to the Price Max', inject([WatchServiceService], (service: WatchServiceService) => {
        let watchQuery= new WatchQuery({ priceMin: 529.00, priceMax:999.00});
        let results = service.getByCriteria(watchQuery);
        expect(results.every((watch) => watch.price >= watchQuery.priceMin && watch.price <= watchQuery.priceMax ));
        expect(results.length).toEqual(1);
      }));
    });

    it('should return make ', inject([WatchServiceService], (service: WatchServiceService) => {
      let watch1 = new Watch({
        make:'Swatch',
        model:'Classic',
        sku:'swCls10022',
        price:500.00,
        warranty:12,
      });

      let watch2 = new Watch({
        make:'Rolex',
        model:'Gold',
        sku:'aklsjdaklsj',
        price:10000.00,
        warranty:12,
      });
      let watch3 = new Watch({
        make:'Swatch',
        model:'Classic',
        sku:'swCls1002',
        price:530.00,
        warranty:12,
      });
      service.watches.push(watch1,watch2,watch3);
      let watchQuery= new WatchQuery({ make:'Swatch'});
      let result = service.getByCriteria(watchQuery);
      expect(result[0].make).toEqual(watch1.make);
      expect(result.length).toEqual(2);

    }));
  });



});
