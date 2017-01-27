export class Watch {
  make: string;
  model: string;
  price: number;
  warranty: number;
  sku:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
