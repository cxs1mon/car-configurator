import {Component, EventEmitter, inject, Output} from '@angular/core';
import {StepTitleComponent} from '../step-title/step-title.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {initialCustomerDataModel} from '../../model/customerData.model';

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
  @Output() continue = new EventEmitter<{}>();

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  stepTitle = 'Kundendaten';
  stepNumber = '1';
  form = new FormGroup({
    firstname: new FormControl(initialCustomerDataModel.firstname, Validators.required),
    lastname: new FormControl(initialCustomerDataModel.lastname, Validators.required),
    email: new FormControl(initialCustomerDataModel.email, [Validators.required, Validators.email]),
    phone: new FormControl(initialCustomerDataModel.phone, [Validators.required, Validators.minLength(9)]),
    newsletter: new FormControl(initialCustomerDataModel.newsletter),
  });

  onClick() {
    this.carConfigurator.setCustomerData(this.form.value);
    this.continue.emit();
    this.form.reset({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      newsletter: true
    });
  }


}
