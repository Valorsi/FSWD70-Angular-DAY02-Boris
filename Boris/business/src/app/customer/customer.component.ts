import { Component, OnInit } from '@angular/core';
import { CustomerService  } from "../shared/customer.service";
import { Router } from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 
constructor(private customerService: CustomerService) { }
submitted: boolean;
formControls = this.customerService.form.controls;
showSuccessMessage: boolean;
  ngOnInit() {
  }


onSubmit() {
	this.submitted = true;
	if(this.customerService.form.valid){
         if(this.customerService.form.get("$key").value == null ){ 
              this.customerService.insertCustomer(this.customerService.form.value);
              this.showSuccessMessage = true;
              setTimeout(()=> this.showSuccessMessage=false,3000);
              this.submitted = false;   
              this.customerService.form.reset();
         } else {
                 
         }
     }
 }
}



