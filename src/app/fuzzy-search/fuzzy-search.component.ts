import { Component, OnInit } from '@angular/core';
import FuzzySearch from 'fuzzy-search'

@Component({
  selector: 'app-fuzzy-search',
  templateUrl: './fuzzy-search.component.html',
  styleUrls: ['./fuzzy-search.component.css']
})
export class FuzzySearchComponent implements OnInit {

  results: object[] | undefined;
  
  constructor() {
   }

  ngOnInit(): void {
  }

  search(input: string): object[] {
    const people = [{
      name: {
        firstName: 'Jesse',
        lastName: 'Bowen',
      },
      state: 'Seattle',
    }];
    var inputVal = document.getElementById("myInput");
    const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
      caseSensitive: true,
    });

    const results = searcher.search(input);
    return results;
  }

}
