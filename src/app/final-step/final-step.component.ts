import {Component, EventEmitter, inject, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {combineLatest} from 'rxjs';
import {CustomerDataModel} from '../../model/customerData.model';
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
  customerData!: CustomerDataModel;
  baseConfig!: BaseConfigDataModel;
  extraConfig!: ExtrasModel[];
  configNr: number = 0;

  @Output() new: EventEmitter<{}> = new EventEmitter<{}>();

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

    this.configNr = Math.floor(Math.random() * 1000);
  }

  get totalExtraPrice(): number {
    let totalExtras: number = this.extraConfig.reduce((sum: number, item: {
      extraPrice: number;
    }): number => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }

  onClick(): void {
    this.new.emit()
  }

}
