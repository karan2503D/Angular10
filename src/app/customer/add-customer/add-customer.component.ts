import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  firstName: string = '';
  terms: boolean = false;
  customerType: string = '';
  constructor() {}

  ngOnInit(): void {}

  setFormValue(formValue: NgForm) {
    let userDetails = {
      firstName: 'ABC',
      terms: true,
      customerType: 'Premium',
      description: 'Set Valued default',
    };

    formValue.setValue(userDetails);
  }
  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }
  resetForm(formValue: NgForm) {
    formValue.reset();
  }
}
