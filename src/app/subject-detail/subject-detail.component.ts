import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/models/subject.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  subject$!: Subject;

  constructor(private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubjectById(this.route.snapshot.paramMap.get('subjectId')!);

}

  getSubjectById(id: String){
    this.subjectService.getSubjectById(id).subscribe((data: any) => {
      this.subject$ = data;
    },
    (error) => console.log(error));
  }
}
