import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from './../shared/shared.module';
import { ProductComponent } from './components/product/product.component';


import { ProductRoutingModule } from './products-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class ProductsModule { }
