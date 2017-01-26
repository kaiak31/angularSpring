export class WatchQuery {
  make: string;
  model: string;
  priceMax: number;
  priceMin: number;
  warrantyMax: number;
  warrantyMin: number;
  sku:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
