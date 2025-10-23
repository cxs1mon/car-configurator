import {Component, EventEmitter, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {delayWhen} from 'rxjs';

@Component({
  selector: 'app-base-configurations',
  imports: [
    StepTitleComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './base-configurations.component.html',
  styleUrl: './base-configurations.component.scss'
})
export class BaseConfigurationsComponent {
  @Output() baseConfiguration = new EventEmitter<any>();
  @Output() continue = new EventEmitter<{}>();
  @Output() back = new EventEmitter<{}>();

  stepTitle = 'Basis Konfigurationen';
  stepNumber = '2';

  price: number = 0;
  priceCalculated: boolean = false;

  form = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl('Gold', [Validators.required]),
    price: new FormControl(0)
  });

  onNext() {
    this.baseConfiguration.emit(this.form.value)
    this.continue.emit()
  }

  onCalculatePrice() {
    let max = 100;
    let randomNum = Math.floor(Math.random() * max);
    this.price = Math.floor(randomNum * 1000);
    this.form.get('price')?.setValue(this.price);
    this.setPriceCalculated(true)
  }

  setPriceCalculated(state: boolean) {
    this.priceCalculated = state;
  }

  onBack() {
    this.back.emit()
  }
}
