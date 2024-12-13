import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Search} from "../models/Search";


@Component({
  selector: 'app-visu',
  standalone: true,
  imports: [],
  templateUrl: './visu.component.html',
  styleUrl: './visu.component.css'
})
export class VisuComponent implements OnInit {
  searches: Search[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 30;
  paginatedSearches: Search[] = [];

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Search[]>('http://localhost:5000/searches?page=1&limit=1000')
      .subscribe((data) => {
        this.searches = data;
        this.updatePage();
      });
  }

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedSearches = this.searches.slice(startIndex, endIndex);

  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }


  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.searches.length) {
      this.currentPage++;
      this.updatePage();
    }
  }
}

