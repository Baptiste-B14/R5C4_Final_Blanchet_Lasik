import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import { ChartPageComponent} from "./chart-page/chart-page.component";
import { VisuComponent} from "./visu/visu.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'graphiques',
    component: ChartPageComponent,
  },
  {
    path: 'visualisation',
    component: VisuComponent,
  }
];
