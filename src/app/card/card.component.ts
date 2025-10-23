import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() extra!: any;
  @Input() isSelected!: boolean;
  @Output() selectCard = new EventEmitter<{}>();


  onSelect() {
    this.selectCard.emit(this.extra)
  }
}
