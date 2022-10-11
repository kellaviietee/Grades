import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/common/grade';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.css']
})
export class GradesListComponent implements OnInit {
  grades:Grade[] = [];
  constructor(private gradeService:GradeService) {
  }

  ngOnInit(): void {
    this.gradeService.currentGrades.subscribe(grades => this.grades = grades)
  }
  listGrades() {
    this.gradeService.getGradeList().subscribe(
      data => {
        this.grades = data;
      }
    )
  }

}
