import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './panel/detail/detail.component';
import { ListComponent } from './panel/list/list.component';
import { LoginComponent } from './panel/login/login.component';

const routes: Routes = 
[
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
