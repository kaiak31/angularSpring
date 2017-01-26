export class Watch {
  id: number;
  make: string;
  model: string;
  price: number;
  warranty: number;
  sku:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
