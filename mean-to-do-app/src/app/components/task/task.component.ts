import { Component, OnInit, Input } from '@angular/core';
import { Task } from '.././../task.model';
import { TaskServiceService } from '.././../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskServiceService) { }

  onEdit() {
    this.taskService.editTask(this.task);
  }

  onComplete() {
    this.task.isDone = !this.task.isDone;
    console.log(this.task.isDone);
    this.taskService.updateTask(this.task).subscribe();
  }

  onDelete() {
    this.taskService.deleteTask(this.task)
      .subscribe(
        result => console.log(result)
      );
  }

  ngOnInit() {
  }

}

