import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-module-choose',
  templateUrl: './module-choose.component.html',
  styleUrls: ['./module-choose.component.css']
})
export class ModuleChooseComponent implements OnInit {
  tracks = [
    {
      "title": "Todo",
      "id": "todo",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "In Progress",
      "id": "inprogress",
      "tasks": [
        {
          "id": "seconf-task",
          "title": "Second Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "D-Done",
      "id": "ddone",
      "tasks": [
        {
          "id": "third-task",
          "title": "Third Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "QA Pass",
      "id": "qapass",
      "tasks": [
        {
          "id": "fourth-task",
          "title": "Fourth Task",
          "description": "This is my first task"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTaskDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
