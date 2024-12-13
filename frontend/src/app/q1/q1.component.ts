import { Component, Input } from '@angular/core';
//import { NumberCardModule } from '@swimlane/ngx-charts';
/**
 * 1. Indicateurs clés (cartes)
 * Commencez par afficher des indicateurs clés pour avoir une vue d’ensemble des données :
 * - Nombre total de voyages : Combien de voyages ont été effectués ?
 * - Prix moyen : Quel est le prix moyen d’un voyage ?
 * - Note moyenne : Quelle est la satisfaction globale des passagers ?
 */

@Component({
  selector: 'app-q1',
  standalone: true,
  imports: [], // N'oubliez pas d'importer le module correspondant pour afficher votre graphique
  templateUrl: './q1.component.html',
})
export class Q1Component {

  view: [number, number] = [1200, 300];
  cardBG = 'black';


  ngOnInit() {

  }

}
