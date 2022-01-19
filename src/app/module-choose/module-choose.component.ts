import { Component, DebugElement, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Module } from 'src/models/module.model';
import { ModuleService } from '../module.service';
import { AlertService } from '../alert.service';
import FuzzySearch from 'fuzzy-search';


@Component({
  selector: 'app-module-choose',
  templateUrl: './module-choose.component.html',
  styleUrls: ['./module-choose.component.css'],
})
export class ModuleChooseComponent implements OnInit {
  public results: any;
  public searcher: any;
  public nameIsChecked = false;
  public numberIsChecked: any;
  public searchInput: any;
  public searchResults: any;
  public pev: any;


  public filters: any[] = [
  ]

  modules$: Module[] = [
    {
      _id: '1',
      name: 'Wiskunde integreren',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
    {
      _id: '2',
      name: 'Informatiesystemen 2',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
    {
      _id: '1',
      name: 'Statistiek',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
  ];

  currentStreet$: Module[] = [
    {
      _id: '1',
      name: 'Android',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
    {
      _id: '1',
      name: 'Bestuurlijke',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
    new Module(),
    {
      _id: '1',
      name: 'Bedrijfseconomie',
      detail: 'Test',
      subjects: [
        {
          _id: '1',
          academyCodes: ['1'],
          name: 'Subject1',
          studyPoints: 1,
          details: 'Lorem bla bla bla',
          environment: 'online',
        },
      ],
      color: this.getRandomColor()
    },
  ];

  constructor(
    private moduleService: ModuleService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    // this.getModules();
    this.results = this.modules$
    this.searchResults = this.modules$;
    this.searcher = new FuzzySearch(this.modules$, ['name', '_id'], {
      caseSensitive: false,
    });
  }

  swap(event: CdkDragDrop<Module[]>) {
    console.log("Calling method");

    if (event.previousContainer.data[event.previousIndex] == this.currentStreet$[0]) {
      return;
    }


    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      2
    );
    transferArrayItem(
      event.container.data,
      event.previousContainer.data,
      3,
      event.previousIndex
    );

    for (let i = 0; i < this.modules$.length; i++) {
      if (this.modules$[i].name === '') {
        this.modules$.splice(i, 1);
      }
    }
  }

  getModules() {
    this.moduleService.getAllModules().subscribe(
      (data: any) => {
        console.log(data);
        this.modules$ = data;
      },
      (error) => console.log(error)
    );
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  onKeyUp(event: any) {
    if (this.pev != null) {
      this.removeFilter(this.pev)
    }
    this.pev = event.target.value
    this.addFilter(event.target.value)
  }

  changed(evt: any) {
    if (evt.target.checked) {
      this.addFilter(evt.target.value)
    } else {
      this.removeFilter(evt.target.value)
    }
  }



  apply() {
    console.log("aplly")
    this.results = this.modules$
    this.filters.forEach((value) => {
      console.log(value)
      this.searcher = new FuzzySearch(this.results, ['name', '_id', '..subjects'], {
        caseSensitive: false,
      });
      this.results = this.searcher.search(value)
    });
    // this.filteredData = this.data
    // for (let f in this.filters) {
    //     this.filteredData = this.filteredData.filter(f)
    // }
  }
  addFilter(f: any) {
    this.filters.push(f)
    this.apply()
  }
  removeFilter(f: any) {
    const idx = this.filters.indexOf(f)
    this.filters.splice(idx, 1)
    this.apply()
  }


}
