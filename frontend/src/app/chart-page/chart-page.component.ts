import { Component } from '@angular/core';
import { Q1Component } from '../q1/q1.component';
import { Q2Component } from '../q2/q2.component';
import { Q3Component } from '../q3/q3.component';


@Component({
  selector: 'app-chart-page',
  standalone: true,
  imports: [
    Q1Component,
    Q2Component,
    Q3Component

  ],
  templateUrl: './chart-page.component.html',
})
export class ChartPageComponent {

}
