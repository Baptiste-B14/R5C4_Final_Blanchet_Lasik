import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {VisualisationComponent} from "./visualisation/visualisation.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'visualisation',
    component: VisualisationComponent,
  },
];
