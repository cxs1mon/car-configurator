import {Component, EventEmitter, Output} from '@angular/core';
import {StepTitleComponent} from '../step-title/step-title.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-customer-data',
  imports: [
    StepTitleComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CustomerDataComponent {
  @Output() customerDataChange = new EventEmitter<any>();
  @Output() continue = new EventEmitter<{}>();

  stepTitle = 'Kundendaten';
  stepNumber = '1';
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    newsletter: new FormControl(true)
  });

  onClick() {
    this.customerDataChange.emit(this.form.value)
    this.continue.emit()

    this.form.reset({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      newsletter: true
    });
  }


}
