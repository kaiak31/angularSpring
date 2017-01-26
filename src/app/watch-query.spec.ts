import {WatchQuery} from './watch-query';

describe('WatchQuery', () => {
  it('should create an instance', () => {
    expect(new WatchQuery()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let watch = new WatchQuery(
      {
        make:'Swatch',
        model:'Classic',
        sku:'swCls10022',
        priceMax:500.00,
        warranty:12,
      }
    );
    expect(watch.make).toEqual('Swatch');
  });
});
