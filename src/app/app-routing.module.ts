import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./component/categories-component/categories-component";
import { HeaderComponent } from "./component/header-component/header-component";
import { ProductsComponent } from "./component/products-component/products-component";
import { MainLayoutComponent } from "./layout/main-layout-component/main-layout-component";
import { LoginComponent } from "./admin/pages/login-component/login-component";
import { AdminPanelComponent } from "./admin/pages/admin-panel-component/admin-panel-component";
import { adminGuardsGuard } from "./guards/admin-guards-guard";
import { ProductSearchComponent } from "./component/product-search-component/product-search-component";
import { ProductSettings } from "./admin/pages/product-settings/product-settings";
import { ProductAddComponent } from "./admin/pages/product-add-component/product-add-component";
import { RegisterComponent } from "./admin/pages/register-component/register-component";
import { VerifyEmailComponent } from "./admin/pages/verify-email-component/verify-email-component";
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
    children: [
      //   { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'product-settings', component: ProductSettings },
      { path: 'product-add', component: ProductAddComponent }
    ]
  },

  { path: 'register', component:RegisterComponent },
  { path: 'verify-email', component:VerifyEmailComponent },



  {
    path: 'productsearch', component: ProductSearchComponent
  },
 

  { path: '**', redirectTo: '' }
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // veya 'top'
  anchorScrolling: 'enabled',
};

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

