import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GradeService } from './services/grade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grades';
  private URL:string = "http://localhost:8080/add";
  constructor(private http: HttpClient, private gradeService: GradeService){}

  onGradeCreate(grade: {points:string, maximum:string}){
    this.http.post(this.URL,grade).subscribe(
      (data)=>{console.log(data);
    }
    )
    this.gradeService.getGradeList();
    this.gradeService.getGradeList();
}
}
