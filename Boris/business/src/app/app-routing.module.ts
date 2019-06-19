import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [

{
	path:"about",component: AboutComponent
},{
	path:"customer",component: CustomerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { 

}


