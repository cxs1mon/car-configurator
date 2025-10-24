import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  @Output() continue = new EventEmitter<{}>();

  onClick() {
    this.continue.emit()
  }
}
