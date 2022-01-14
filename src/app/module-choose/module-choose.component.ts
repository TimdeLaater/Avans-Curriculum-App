import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Module } from 'src/models/module.model';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module-choose',
  templateUrl: './module-choose.component.html',
  styleUrls: ['./module-choose.component.css']
})
export class ModuleChooseComponent implements OnInit {
  modules$ : Module[] = [
    {
      _id: "1",
      name: "Test Module 4",
      detail: "Test",
      subjects: [{
        _id: "1",
        academyCodes: ["1"],
        name: "Subject1",
        studyPoints: 1,
        details: "Lorem bla bla bla",
        environment: "online"
      },
    ]
    },
  ];

  currentStreet$ : Module[] = [{
    _id: "1",
    name: "Test Module 1",
    detail: "Test",
    subjects: [{
      _id: "1",
      academyCodes: ["1"],
      name: "Subject1",
      studyPoints: 1,
      details: "Lorem bla bla bla",
      environment: "online"
    },
  ]
  },
  {
    _id: "1",
    name: "Test Module 2",
    detail: "Test",
    subjects: [{
      _id: "1",
      academyCodes: ["1"],
      name: "Subject1",
      studyPoints: 1,
      details: "Lorem bla bla bla",
      environment: "online"
    },
  ]
  },
  new Module(),
  {
    _id: "1",
    name: "Test Module 3",
    detail: "Test",
    subjects: [{
      _id: "1",
      academyCodes: ["1"],
      name: "Subject1",
      studyPoints: 1,
      details: "Lorem bla bla bla",
      environment: "online"
    },
  ]
  }
]

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.getModules();
  }

  drop(event: CdkDragDrop<Module[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  PredicateIndexEquals(index: CdkDrag<Module>){
    return
  }

  getModules(){
    this.moduleService.getAllModules().subscribe((data : any) => {
      console.log(data);
      this.modules$ = data;
    }, 
    (error) => console.log(error));
  }


}
