import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {


  form = new FormGroup({
    rating: new FormControl<number | null>(
      { value: null, disabled: false },
      Validators.required
    ),
    comment: new FormControl(''),
  });

}
  
  

