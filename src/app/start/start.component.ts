import {Component, EventEmitter, Output} from '@angular/core';
import {CarConfiguratorService} from '../service/car-configurator.service';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  providers: [CarConfiguratorService],
  styleUrl: './start.component.scss'
})
export class StartComponent {
  @Output() continue = new EventEmitter<{}>();

  ngOnInit() {
    this.loadLaunches();
  }

  private loadLaunches() {
  }

  onClick() {
    this.continue.emit()
  }
}
