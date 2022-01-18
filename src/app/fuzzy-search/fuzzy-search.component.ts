import { Component, OnInit } from '@angular/core';
import FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-fuzzy-search',
  templateUrl: './fuzzy-search.component.html',
  styleUrls: ['./fuzzy-search.component.css'],
})
export class FuzzySearchComponent implements OnInit {
  public searchInput: any;
  public results: any;

  ngAfterViewInit() {
    this.searchInput = document.getElementById(
      'search-input'
    ) as HTMLInputElement;
  }

  search() {
    console.log('werkt');
    const people = [
      {
        name: {
          firstName: 'Jesse',
          lastName: 'Bowen',
        },
        state: 'Seattle',
      },
      {
        name: {
          firstName: 'Klaas',
          lastName: 'de Vries',
        },
        state: 'Seattle',
      },
    ];
    const searcher = new FuzzySearch(
      people,
      ['name.firstname', 'name.lastname', 'state'],
      {
        caseSensitive: true,
      }
    );

    this.results = searcher.search(this.searchInput);
  }

  constructor() {}

  ngOnInit(): void {}
}
