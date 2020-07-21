import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model';

import { CartService } from '../../../core/services/cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor(
    private cartService: CartService
  ) { }

  addCart() {
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    /* this.productClicked.emit(this.product.id); */
  }
}
