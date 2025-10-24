import {Component, EventEmitter, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-extra-configurations',
  imports: [
    StepTitleComponent,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    CardComponent,
    NgForOf
  ],
  templateUrl: './extra-configurations.component.html',
  styleUrl: './extra-configurations.component.scss'
})
export class ExtraConfigurationsComponent {
  stepTitle = 'Zusätzliche Konfigurationen';
  stepNumber = '3';
  totalPrice: number = 0;

  extraList: any = [{
    extraName: 'Sportfelgen 19" Performance Line',
    extraDescription: 'Hochwertige, leichte Alu-Felgen im sportlichen Design. Verbessern Fahrdynamik und verleihen dem Fahrzeug eine edle Optik.',
    extraPath: './rim.png', extraPrice: 1200
  },
    {
      extraName: 'Sportauspuff aus Edelstahl',
      extraDescription: 'Leistungsoptimierter Auspuff mit dynamischem Klangbild. Sorgt für einen sportlichen Sound und reduziert Abgasgegendruck.',
      extraPath: './rim.png', extraPrice: 900
    }, {
      extraName: 'Mattlackierung Premium',
      extraDescription: 'Aufwendige Speziallackierung mit seidenmattem Finish. Verleiht dem Fahrzeug eine markante und exklusive Erscheinung.',
      extraPath: './rim.png', extraPrice: 1500
    }]


  @Output() extraConfiguration = new EventEmitter<any>();
  @Output() continue = new EventEmitter<{}>();
  @Output() back = new EventEmitter<{}>();

  selectedItems: any[] = [];

  onNext() {

    this.extraConfiguration.emit(this.selectedItems)
    this.continue.emit()
  }

  onBack() {
    this.back.emit()
  }

  toggleItem(item: any) {
    console.log(item);
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1); // deselect
    } else {
      this.selectedItems.push(item); // select
    }
    console.log(this.selectedItems);
    this.getTotalPrice()
  }

  isSelected(item: any) {
    return this.selectedItems.includes(item);
  }

  getTotalPrice() {
    this.totalPrice = this.selectedItems.reduce((sum: any, item: { extraPrice: any; }) => sum + item.extraPrice, 0);
  }
}
