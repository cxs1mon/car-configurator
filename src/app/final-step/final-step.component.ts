import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-final-step',
  imports: [],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss'
})
export class FinalStepComponent {

  @Output() new = new EventEmitter<{}>();

  onClick() {
    this.new.emit()
  }
}
