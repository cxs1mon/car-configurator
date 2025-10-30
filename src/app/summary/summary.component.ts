import {Component, EventEmitter, inject, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {NgForOf, NgIf} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {combineLatest} from 'rxjs';
import {ExtrasModel} from '../../model/extrasModel';
import {BaseConfigDataModel} from '../../model/baseConfigDataModel';
import {CustomerDataModel} from '../../model/customerData.model';

@Component({
  selector: 'app-summary',
  imports: [
    StepTitleComponent,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  stepTitle: string = 'Zusammenfassung & Abschluss';
  stepNumber: string = '4';

  customerData!: CustomerDataModel;
  baseConfig!: BaseConfigDataModel;
  extraConfig!: ExtrasModel[];

  @Output() back: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() continue: EventEmitter<{}> = new EventEmitter<{}>();

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  ngOnInit(): void {
    combineLatest([
      this.carConfigurator.customerData$,
      this.carConfigurator.baseConfiguration$,
      this.carConfigurator.extraConfiguration$
    ]).subscribe(([customerData, baseConfig, extraConfig]): void => {
      this.customerData = customerData;
      this.baseConfig = baseConfig;
      this.extraConfig = extraConfig;

      if (!customerData) console.log('NO Sum CustomerData');
      if (!baseConfig) console.log('NO Sum baseConfig');
      if (!extraConfig) console.log('NO Sum extraConfig');
    });
  }

  agb = new FormGroup({
    agbCheck: new FormControl(false, Validators.requiredTrue),
  });

  get totalExtraPrice(): number {
    let totalExtras: number = this.extraConfig.reduce((sum: number, item: {
      extraPrice: number;
    }): number => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }

  onNext(): void {
    this.continue.emit()
  }

  onBack(): void {
    this.back.emit()
  }

}
