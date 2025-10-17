import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-step-title',
  imports: [],
  templateUrl: './step-title.component.html',
  styleUrl: './step-title.component.scss'
})
export class StepTitleComponent {
  @Input() title!: string;
  @Input() number!: string;
}
