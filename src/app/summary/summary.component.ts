import {Component, EventEmitter, inject, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {NgForOf, NgIf} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-summary',
  imports: [
    StepTitleComponent,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  stepTitle = 'Zusammenfassung & Abschluss';
  stepNumber = '4';

  customerData: any;
  baseConfig: any;
  extraConfig: any;

  @Output() back = new EventEmitter<{}>();
  @Output() continue = new EventEmitter<{}>();

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  ngOnInit() {
    combineLatest([
      this.carConfigurator.customerData$,
      this.carConfigurator.baseConfiguration$,
      this.carConfigurator.extraConfiguration$
    ]).subscribe(([customerData, baseConfig, extraConfig]) => {
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
    let totalExtras = this.extraConfig.reduce((sum: any, item: { extraPrice: any; }) => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }


  onNext() {
    this.continue.emit()
  }

  onBack() {
    this.back.emit()
  }

}
