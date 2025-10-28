import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

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

  @Output() new = new EventEmitter<{}>();
  @Input() getCustomerData: any;
  @Input() getBaseConfig: any;
  @Input() getExtraConfig: any;

  ngOnInit() {
    this.customerData = this.getCustomerData;
    this.baseConfig = this.getBaseConfig;
    this.extraConfig = this.getExtraConfig;

    console.log('Summary Customer Data:', this.customerData);
    console.log('Summary Base Config:', this.baseConfig);
    console.log('Summary Extra Config:', this.extraConfig);
  }

  get totalExtraPrice(): number {
    let totalExtras = this.extraConfig.reduce((sum: any, item: { extraPrice: any; }) => sum + item.extraPrice, 0);
    return Math.floor(totalExtras + this.baseConfig.price);
  }

  onClick() {
    this.new.emit()
  }

  protected readonly Math = Math;
}
