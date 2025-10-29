import {Component, EventEmitter, inject, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {combineLatest} from 'rxjs';

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
  customerData: any;
  baseConfig: any;
  extraConfig: any;
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
    let totalExtras = this.extraConfig.reduce((sum: any, item: { extraPrice: any; }) => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }

  onClick() {
    this.new.emit()
  }

}
