import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {GraphiquesComponent} from './graphiques/graphiques.component';
import { VisuComponent} from "./visu/visu.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'graphiques',
    component: GraphiquesComponent,
  },
  {
    path: 'visualisation',
    component: VisuComponent,
  }
];
