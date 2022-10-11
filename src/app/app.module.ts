import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradesListComponent } from './components/grades-list/grades-list.component';
import {HttpClientModule} from "@angular/common/http";
import { GradeService } from './services/grade.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GradesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
