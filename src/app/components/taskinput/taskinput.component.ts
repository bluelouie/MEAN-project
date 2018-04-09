import { Task } from '.././../task.model';
import { TaskServiceService } from '.././../task-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
declare var require: any;


@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {
  
  dateFormat = require('dateformat');
  now = new Date();
  date = this.dateFormat(this.now, 'shortDate');

  task: Task;

  constructor(private taskServiceService: TaskServiceService) { }
  
  onSubmit(form: NgForm) {
    if (this.task) {
      // Edit
      this.task.title = form.value.titleInput;
      this.task.description = form.value.descriptionInput;
      this.taskServiceService.updateTask(this.task).subscribe(
        result => console.log(result)
      );
      this.task = null;
    } else {
      // Create
      const task = new Task(form.value.titleInput, this.date, false, 'Jose', '', form.value.descriptionInput);
      this.taskServiceService.addTask(task)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    }
    form.resetForm();
  }


  onClear(form: NgForm) {
    this.task = null;
    form.resetForm();
  }

  ngOnInit() {
    this.taskServiceService.taskIsEdit.subscribe(
      (task: Task) => this.task = task
    );
  }

}
