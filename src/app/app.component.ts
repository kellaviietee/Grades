import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stats } from './common/stats';
import { GradeService } from './services/grade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grades';
  private URL:string = "https://hinded.herokuapp.com/add";
  stats:Stats = new Stats(0,0,0,0,0,0,0,0,0,0,0,0,0);
  constructor(private http: HttpClient, private gradeService: GradeService){}
  ngOnInit(): void {
    this.clearAll();
  }

  onGradeCreate(grade: {points:string, maximum:string}){
    if(!grade.points || !grade.maximum) {
      alert("Punktid või maksimum määramata!");
    } else if(grade.points.includes(",") || grade.maximum.includes(",")) {
      alert("Koma asemel kasuta punkti!")
    }
    else {
      this.http.post(this.URL,grade).subscribe(
        (data)=>{console.log(data);
      }
      )
      this.gradeService.getGradeList();
      this.gradeService.getGradeList();
    }
}
getStats(){
  this.gradeService.getStats().subscribe((data)=>{
    this.stats = data;
    console.log(this.stats);
  })
}
clearAll(){
  this.gradeService.clearAll().subscribe((data)=>{
    this.stats = data;
    this.gradeService.getGradeList();
  })

}

}
