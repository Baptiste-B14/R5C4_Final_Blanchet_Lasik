import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Search} from '../models/Search';
@Component({
  selector: 'app-graphiques',
  standalone: true,
  imports: [],
  templateUrl: './graphiques.component.html',
  styleUrl: './graphiques.component.css'
})
export class GraphiquesComponent implements OnInit{
  searches : Search[] = []
  
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get<Search[]>('http://localhost:5000/users').subscribe((data) => (this.searches = data));
  }
}
