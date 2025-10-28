import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgOptimizedImage
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
