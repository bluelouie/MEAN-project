import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskinputComponent } from './components/taskinput/taskinput.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskServiceService } from './task-service.service';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskinputComponent,
    AppheaderComponent,
    TaskListComponent,
    TasksComponent,
    TaskComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    Routing
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
