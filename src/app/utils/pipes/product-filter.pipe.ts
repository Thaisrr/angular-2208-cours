import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  pure: true
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[]): Product[] {

    return value.filter(p => p.quantity > 0);
  }

}
