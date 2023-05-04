import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  firstName = '';
  lastName = '';
  city = '';
  address = '';
  phoneNumber = '';

  submitOrder() {
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.address = '';
    this.phoneNumber = '';
  }
}
