import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {GraphiquesComponent} from './graphiques/graphiques.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'graphiques',
    component: GraphiquesComponent,
  }
];
