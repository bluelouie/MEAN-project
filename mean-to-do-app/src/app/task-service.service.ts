import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskServiceService {
  private tasks: Task[] = [];

  constructor(private http: Http) {}

  getTasks() {
    return this.http.get('http://localhost:3000/task')
      .map( (response: Response) => {
        const tasks = response.json().obj;
        let tranformedTasks: Task[] = [];
        for (let task of tasks) {
          tranformedTasks.push(new Task(task.title, task.createdDate, task.isDone, task.userId, task.description));
        }
        this.tasks = tranformedTasks;
        return tranformedTasks;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addMessage(task: Task) {
    this.tasks.push(task);
    const body = JSON.stringify(task);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/task', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()));
  }
}

