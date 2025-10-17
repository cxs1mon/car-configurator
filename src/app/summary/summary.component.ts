import { Component } from '@angular/core';
import {StepTitleComponent} from "../step-title/step-title.component";

@Component({
  selector: 'app-summary',
    imports: [
        StepTitleComponent
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  stepTitle = 'Zusammenfassung & Abschluss';
  stepNumber = '4';
}
