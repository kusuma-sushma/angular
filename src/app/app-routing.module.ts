import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  // { path: 'home', component:home },
  // { path: 'about', component:about },
  // { path: 'login', component:login },
  // { path: 'footer', component:footer },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
