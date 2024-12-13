import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-visu',
  standalone: true,
  imports: [],
  templateUrl: './visu.component.html',
  styleUrl: './visu.component.css'
})
export class VisuComponent implements OnInit {
  searches: [] = [];

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/searches').subscribe((data) => (this.searches = data))
  }


}
