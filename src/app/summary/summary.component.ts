import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {NgForOf, NgIf} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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
