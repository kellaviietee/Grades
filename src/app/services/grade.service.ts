import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../common/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private URL:string = "http://localhost:8080/all";
  constructor(private httpClient:HttpClient) { }

  getGradeList():Observable<Grade[]>{
    return this.httpClient.get<Grade[]>(this.URL);
  }
}
