import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Search} from '../models/Search';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-graphiques',
  standalone: true,
  imports: [],
  templateUrl: './graphiques.component.html',
  styleUrl: './graphiques.component.css'
})
export class GraphiquesComponent implements OnInit{
  searches : Search[] = []
  g1: number[] = []
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get<Search[]>('http://localhost:5000/searches').subscribe((data) => (this.searches = data));
    this.g1 = this.format1()
  }

  format1(){
    return this.GraphService.toSingleData({
      'Nombre total de voyages': this.data.length,
      'Prix moyen': this.graphService.avg(this.data.map(({ price }) => price)),
      'Note moyenne': this.graphService.avg(this.data.map(({ rate }) => rate)),
    });
  
}
