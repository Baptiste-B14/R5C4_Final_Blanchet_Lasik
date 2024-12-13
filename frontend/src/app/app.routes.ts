import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import { VisuComponent} from "./visu/visu.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'visualisation',
    component: VisuComponent,
  },
];
