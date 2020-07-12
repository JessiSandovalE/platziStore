import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'list-product',
        component: ListProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
