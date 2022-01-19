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
  public isChecked = false;
  public searchInput: any;

  modules$: Module[] = [
    {
      _id: '1',
      name: 'Test Module 4',
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
      name: 'Test Module 5',
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
      name: 'Test Module 6',
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
      name: 'Test Module 1',
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
      name: 'Test Module 2',
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
      name: 'Test Module 3',
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
    if (event == "") {
      this.results = this.modules$
    } else {
      var inputValue = event.target.value;
      console.log("testOn KEY", inputValue)
      this.results = this.searcher.search(inputValue)
    }

    // this.results = this.searcher.search(x.target.value);
  }

  changed(evt: any) {
    if (!this.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
    console.log(this.isChecked)
    console.log(evt.target.value)


  }

}
