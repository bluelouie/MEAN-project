import { Task } from './../task.model';
import { TaskServiceService } from './../task-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {
  

  constructor(private taskServiceService: TaskServiceService) { }
  
  onSubmit(form: NgForm) {
    const task = new Task(form, '03/01/2018', false, 'Jose', form.value.descriptionInput);
    this.taskServiceService.addMessage(task)
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    form.resetForm();
}

  ngOnInit() {
  }

}
