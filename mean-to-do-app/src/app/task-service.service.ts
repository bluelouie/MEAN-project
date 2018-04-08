import { Task } from './task.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskServiceService {
  private tasks: Task[] = [];
  taskIsEdit = new EventEmitter<Task>();

  url = 'https://mighty-retreat-89916.herokuapp.com/tasks';

  constructor(private http: Http) {}

  getTasks() {
    return this.http.get(this.url)
      .map( (response: Response) => {
        const tasks = response.json().obj;
        let tranformedTasks: Task[] = [];
        for (let task of tasks) {
          tranformedTasks.push(new Task(task.title, task.createdDate, task.isDone, task.userId, task._id, task.description));
        }
        
        this.tasks = tranformedTasks;
        return tranformedTasks;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addTask(task: Task) {
    const body = JSON.stringify(task);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url, body, {headers: headers})
    .map( (response: Response) => {
      const result = response.json();
      const newTask = new Task(result.obj.title, result.obj.createdDate, result.obj.isDone, result.obj.userId, result.obj._id, result.obj.description);
      this.tasks.push(newTask);
      return newTask;
    })
    .catch((error: Response) => Observable.throw(error.json()));
  }

  editTask(task: Task) {
    this.taskIsEdit.emit(task);
  }

  updateTask(task: Task) {
    const body = JSON.stringify(task);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch(this.url + '/' + task.taskId, body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    return this.http.delete(this.url + '/' + task.taskId)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()));
  }
}

