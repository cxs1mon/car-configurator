import { Component } from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";

@Component({
  selector: 'app-base-configurations',
    imports: [
        StepTitleComponent
    ],
  templateUrl: './base-configurations.component.html',
  styleUrl: './base-configurations.component.scss'
})
export class BaseConfigurationsComponent {
  stepTitle = 'Basis Konfigurationen';
  stepNumber = '2';
}
