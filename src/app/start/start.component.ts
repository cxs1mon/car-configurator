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
  @Output() continue: EventEmitter<{}> = new EventEmitter<{}>();

  ngOnInit(): void {
    this.loadLaunches();
  }

  private loadLaunches(): void {
  }

  onClick(): void {
    this.continue.emit()
  }
}
