import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {CustomerDataComponent} from './customer-data/customer-data.component';
import {BaseConfigurationsComponent} from './base-configurations/base-configurations.component';
import {ExtraConfigurationsComponent} from './extra-configurations/extra-configurations.component';
import {SummaryComponent} from './summary/summary.component';
import {FinalStepComponent} from './final-step/final-step.component';
import {StartComponent} from './start/start.component';
import {CarConfiguratorService} from './service/car-configurator.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, HeaderComponent, NgSwitch, NgSwitchCase, CustomerDataComponent, BaseConfigurationsComponent, ExtraConfigurationsComponent, SummaryComponent, FinalStepComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  step: number = 0;

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  next() {
    this.step++
  }

  back() {
    this.step--;
  }

  finish() {
    console.log('Process Finished');
    this.carConfigurator.setCustomerData(null);
    this.carConfigurator.setBaseConfig(null);
    this.carConfigurator.setExtraConfig(null);
    this.step = 0;
  }
}
