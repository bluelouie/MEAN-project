import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private taskService: TaskServiceService) { }

  onEdit() {
    this.taskService.editTask(this.task);
  }

  onDelete() {
    this.taskService.deleteTask(this.task)
      .subscribe(
        result => console.log(result)
      );
  }
}

