import { Component, OnInit } from '@angular/core';
import FuzzySearch from 'fuzzy-search'

@Component({
  selector: 'app-fuzzy-search',
  templateUrl: './fuzzy-search.component.html',
  styleUrls: ['./fuzzy-search.component.css']
})
export class FuzzySearchComponent implements OnInit {

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
    
    const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
      caseSensitive: true,
    });
    const result = searcher.search('ess');
  }

}
