import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { StudyplanService } from 'src/app/studyplan.service';
import { Studyplan } from 'src/models/studyplan.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-studyplan-list',
  templateUrl: './studyplan-list.component.html',
  styleUrls: ['./studyplan-list.component.css']
})
export class StudyplanListComponent implements OnInit {
  studyPlans$!: Studyplan[];
  user!: User

  constructor(private studyPlanService: StudyplanService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentuser')!)
    this.getStudyplans(this.route.snapshot.paramMap.get('userId')!);
  }

  getStudyplans(id: String){
    this.studyPlanService.getStudyPlansFromUser(id).subscribe(
      (data: any) => {
        this.studyPlans$ = data;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
