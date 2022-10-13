import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Grade } from '../common/grade';
import { Stats } from '../common/stats';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  public gradesSource = new BehaviorSubject<Grade[]>([]);
  currentGrades = this.gradesSource.asObservable();
  private URL:string = "http://localhost:8080/all";
  private statsURL:string = "http://localhost:8080/stats";
  private clearURL:string = "http://localhost:8080/clear";
  constructor(private httpClient:HttpClient) { }

  getGradeList(){
    this.httpClient.get<Grade[]>(this.URL).subscribe((data)=>{this.gradesSource.next(data)})
    return this.httpClient.get<Grade[]>(this.URL);
  }

  getStats():Observable<Stats>{
    return this.httpClient.get<Stats>(this.statsURL);
  }
  clearAll():Observable<Stats>{
    return this.httpClient.get<Stats>(this.clearURL);
  }
}
