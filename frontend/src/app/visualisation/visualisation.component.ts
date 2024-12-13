import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-visualisation',
  standalone: true,
  imports: [],
  templateUrl: './visualisation.component.html',
  styleUrl: './visualisation.component.css'
})
export class VisualisationComponent implements OnInit{
  searches : [] = [];
  constructor(private readonly http:HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/searches').subscribe((data)=>(this.searches = data))
  }
}

