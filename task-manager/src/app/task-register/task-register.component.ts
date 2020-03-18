import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  @Input() task: Task = {
    identification: '',
    firstName: '',
    lastName: '',
    startDate: null,
    endDate: null,
    startWorkShift: null,
    endWorkShift: null,
    startExtra: null,
    endExtra: null,
    extraReason: ''
  };

  taskSaved: Task;
  

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    console.log('Task Register Component');
  }

  registerTime(){
    console.log(this.task);
    this.restApi.registerTask(this.task).subscribe((data: any) => {
      this.taskSaved = data;
    });
  }

}
