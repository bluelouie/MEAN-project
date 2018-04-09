import { TaskServiceService } from '.././../task-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '.././../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe( (tasks: Task[]) => {
          this.tasks = tasks;
      });
  }

}
