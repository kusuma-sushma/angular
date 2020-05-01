import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PostsComponent } from './posts/posts.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: 'products', component: ProductsComponent, 
data: {roles: ['admin']}, 
},
{ path: 'add-product', component: AddProductComponent,
  data: { roles: ['admin']}, canActivate: [AuthGuard]
},
{ path: 'edit-product', component: EditProductComponent,
  data: {roles: ['admin'] },
},
{ path: 'posts', component: PostsComponent,
 data: {roles  ['admin', 'user'] },
 },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
