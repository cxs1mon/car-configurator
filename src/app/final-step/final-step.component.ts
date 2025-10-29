import {Component, EventEmitter, inject, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {combineLatest} from 'rxjs';
import {customerDataModel} from '../../model/customerData.model';
import {BaseConfigDataModel} from '../../model/baseConfigDataModel';
import {ExtrasModel} from '../../model/extrasModel';

@Component({
  selector: 'app-final-step',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss'
})
export class FinalStepComponent {
  customerData!: customerDataModel;
  baseConfig!: BaseConfigDataModel;
  extraConfig!: ExtrasModel[];
  configNr: number = 0;

  @Output() new = new EventEmitter<{}>();

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

    this.configNr = Math.floor(Math.random() * 1000);
  }

  get totalExtraPrice(): number {
    let totalExtras = this.extraConfig.reduce((sum: number, item: { extraPrice: number; }) => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }

  onClick() {
    this.new.emit()
  }

}
