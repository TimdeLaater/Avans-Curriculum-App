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

@Component({
  selector: 'app-module-choose',
  templateUrl: './module-choose.component.html',
  styleUrls: ['./module-choose.component.css'],
})
export class ModuleChooseComponent implements OnInit {

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
    },
  ];

  constructor(
    private moduleService: ModuleService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // this.getModules();
  }

  swap(event: CdkDragDrop<Module[]>) {
    console.log('Swapping empty card with selected choice!');
    // Get old target
    let oldtarget = this.modules$[event.previousIndex];
    if (this.currentStreet$[event.currentIndex + 2].name == '') {
      console.log(
        `The data from index ${
          this.currentStreet$[event.currentIndex]
        } is null!`
      );
      this.modules$.splice(event.previousIndex, 1);
    } else {
      this.modules$[event.previousIndex] =
        this.currentStreet$[event.currentIndex + 2];
    }
    // give the selected card to the current street
    this.currentStreet$[event.currentIndex + 2] = oldtarget;
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
}
