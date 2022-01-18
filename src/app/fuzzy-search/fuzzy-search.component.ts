import { Component, OnInit } from '@angular/core';
import FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-fuzzy-search',
  templateUrl: './fuzzy-search.component.html',
  styleUrls: ['./fuzzy-search.component.css'],
})
export class FuzzySearchComponent implements OnInit {
  public results: any;
  public searcher: any;
  public searchInput: any;
  constructor() {

  }

  ngOnInit(): void {
    const people = [{
      name: {
        firstName: 'Jesse',
        lastName: 'Bowen',
      },
      state: 'Seattle',
    }];


    this.searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
      caseSensitive: false,
    });



  }

  onKeyUp(event: any) {
    var inputValue = event.target.value;
    console.log("testOn KEY", inputValue)
    this.results = this.searcher.search(inputValue)
    // this.results = this.searcher.search(x.target.value);
  }
}
