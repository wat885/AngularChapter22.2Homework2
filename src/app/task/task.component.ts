import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObj:Task;
  @Output() 
  deleteTask: EventEmitter<TaskComponent> = new EventEmitter();
  @Output() 
  taskClick: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    // console.log('delete')
    this.deleteTask.emit(this)
  }

  taskSelect(){
    this.taskClick.emit(this)
  }

}
