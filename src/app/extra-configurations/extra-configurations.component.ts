import { Component } from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";

@Component({
  selector: 'app-extra-configurations',
    imports: [
        StepTitleComponent
    ],
  templateUrl: './extra-configurations.component.html',
  styleUrl: './extra-configurations.component.scss'
})
export class ExtraConfigurationsComponent {
  stepTitle = 'Zusätzliche Konfigurationen';
  stepNumber = '3';
}
