import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskinputComponent } from './taskinput/taskinput.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskServiceService } from './task-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskinputComponent,
    AppheaderComponent,
    TaskListComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
