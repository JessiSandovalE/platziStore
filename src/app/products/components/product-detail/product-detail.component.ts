import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productServicce: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productServicce.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productServicce.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde Angular',
      image: 'assets/images/banner-2.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productServicce.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 33000,
      description: 'Edición producto'
    };

    this.productServicce.updateProduct('222', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productServicce.deleteProduct('222')
      .subscribe(rta => {
        console.log(rta);
      });
  }
}
