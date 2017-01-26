import {Watch} from './watch';

describe('Watch', () => {
  it('should create an instance', () => {
    expect(new Watch()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let watch = new Watch(
      {
        make:'Swatch',
        model:'Classic',
        sku:'swCls10022',
        price:500.00,
        warranty:12,
      }
  );
    expect(watch.make).toEqual('Swatch');
    expect(watch.sku).toEqual('swCls10022');
    expect(watch.sku).toEqual('swCls10022');
  });
});
