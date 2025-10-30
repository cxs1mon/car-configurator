import {Component, EventEmitter, inject, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {BaseConfigDataModel} from '../../model/baseConfigDataModel';

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
  @Output() continue: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() back: EventEmitter<{}> = new EventEmitter<{}>();

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  stepTitle: string = 'Basis Konfigurationen';
  stepNumber: string = '2';

  price: number = 0;
  priceCalculated: boolean = false;

  form = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl('Gold', Validators.required),
    price: new FormControl(0)
  });

  onNext(): void {
    this.carConfigurator.setBaseConfig(this.form.value as BaseConfigDataModel);
    this.continue.emit()
  }

  onCalculatePrice(): void {
    let max: number = 100;
    let randomNum: number = Math.floor(Math.random() * max);
    this.price = Math.floor(randomNum * 1000);
    this.form.get('price')?.setValue(this.price);
    this.setPriceCalculated(true)
  }

  setPriceCalculated(state: boolean): void {
    this.priceCalculated = state;
  }

  onBack(): void {
    this.back.emit()
  }

}
