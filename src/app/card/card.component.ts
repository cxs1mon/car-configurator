import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ExtrasModel} from '../../model/extrasModel';

@Component({
  selector: 'app-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() extra!: ExtrasModel;
  @Input() isSelected!: boolean;
  @Output() selectCard: EventEmitter<{}> = new EventEmitter<{}>();

  onSelect(): void {
    this.selectCard.emit(this.extra)
  }
}
