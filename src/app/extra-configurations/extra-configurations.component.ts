import {Component, EventEmitter, inject, Output} from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {CardComponent} from '../card/card.component';
import {CarConfiguratorService} from '../service/car-configurator.service';
import {extras} from '../../assets/data/extras';
import {ExtrasModel} from '../../model/extrasModel';

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
  stepTitle: string = 'Zusätzliche Konfigurationen';
  stepNumber: string = '3';
  totalPrice: number = 0;

  extraList: ExtrasModel[] = extras;

  @Output() continue: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() back: EventEmitter<{}> = new EventEmitter<{}>();

  public carConfigurator: CarConfiguratorService = inject(CarConfiguratorService);

  selectedItems: ExtrasModel[] = [];
  extrasTouched: boolean = false;

  onNext(): void {
    this.carConfigurator.setExtraConfig(this.selectedItems);
    this.continue.emit()
  }

  onBack(): void {
    this.back.emit()
  }

  toggleItem(item: ExtrasModel): void {
    this.extrasTouched = true;
    const index: number = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1); // deselect
    } else {
      this.selectedItems.push(item); // select
    }
    this.getTotalPrice()
  }

  isSelected(item: ExtrasModel): boolean {
    return this.selectedItems.includes(item);
  }

  getTotalPrice(): void {
    this.totalPrice = this.selectedItems.reduce((sum: number, item: {
      extraPrice: number;
    }): number => sum + item.extraPrice, 0);
  }
}
