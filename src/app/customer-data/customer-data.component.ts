import {Component} from '@angular/core';
import {StepTitleComponent} from '../step-title/step-title.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-data',
  imports: [
    StepTitleComponent,
    ReactiveFormsModule
  ],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CustomerDataComponent {
  stepTitle = 'Kundendaten';
  stepNumber = '1';
  form = new FormGroup({
    firstname: new FormControl('a', Validators.required),
    lastname: new FormControl('b', Validators.required),
    email: new FormControl('a', [Validators.required, Validators.email]),
    phone: new FormControl('0', Validators.required),
    newsletter: new FormControl(true)
  });

  onClick() {
    console.log('Form Submitted');
  }
}
