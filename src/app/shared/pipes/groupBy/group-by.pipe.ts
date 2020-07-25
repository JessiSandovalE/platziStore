import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../../../product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  products: Product[];

  constructor(private cartService: CartService) {
  }

  transform(product: any, args?: any): any {
    let total = 0;
    this.cartService.cart$.subscribe(products => {
      products.forEach((elemento) => {
        if (elemento.id === product.id) {
          total += 1;
        }
      });
    });
    return total;
  }

  /*  transform(products: Product[]) {
     const mapProduct = products.map(product => product.id);
     const uniqueProducts = products.filter((item, index, array) => {
       const trueIndex = mapProduct.indexOf(item.id);
       if (trueIndex === index) {
         item.quantity = 1;
         returntrue;
       } else {
         array[trueIndex].quantity++;
         returnfalse;
       }
     });
     return uniqueProducts;
   } */
}
