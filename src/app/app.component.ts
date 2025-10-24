import {Component, EventEmitter, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {CustomerDataComponent} from './customer-data/customer-data.component';
import {BaseConfigurationsComponent} from './base-configurations/base-configurations.component';
import {ExtraConfigurationsComponent} from './extra-configurations/extra-configurations.component';
import {SummaryComponent} from './summary/summary.component';
import {FinalStepComponent} from './final-step/final-step.component';
import {StartComponent} from './start/start.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, HeaderComponent, NgSwitch, NgSwitchCase, CustomerDataComponent, BaseConfigurationsComponent, ExtraConfigurationsComponent, SummaryComponent, FinalStepComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  step: number = 0;
  receivedCustomerData: any = [];
  receivedBaseConfiguration: any = [];
  receivedExtraConfiguration: any = [];

  onCustomerDataChanged(data: any) {
    this.receivedCustomerData = data;
  }

  onBaseConfigurationChanged(data: any) {
    this.receivedBaseConfiguration = data;
  }

  onExtraConfigurationChanged(data: any) {
    this.receivedExtraConfiguration = data;
  }

  next() {
    this.step++
  }

  back() {
    this.step--;
  }

  finish() {
    console.log('Process Finished');
    this.step = 0;
  }
}
