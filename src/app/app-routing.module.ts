import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./component/categories-component/categories-component";
import { HeaderComponent } from "./component/header-component/header-component";
import { ProductsComponent } from "./component/products-component/products-component";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { LoginComponent } from "./admin/pages/login-component/login-component";
import { AdminPanelComponent } from "./admin/pages/admin-panel-component/admin-panel-component";
import { adminGuardsGuard } from "./guards/admin-guards-guard";
import { ProductSearchComponent } from "./component/product-search-component/product-search-component";
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:name', component: ProductsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },

 {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [adminGuardsGuard],
    // children: [
    //   { path: '', redirectTo: 'products', pathMatch: 'full' },
    //   { path: 'products', component: ProductsComponent },
    //   { path: 'categories', component: CategoriesComponent }
    // ]
  },
   {
    path:'productsearch',component:ProductSearchComponent
   },  

  { path: '**', redirectTo: '' }
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule{

}

