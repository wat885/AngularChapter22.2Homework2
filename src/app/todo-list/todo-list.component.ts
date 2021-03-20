import { Component, OnInit , QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChildren(TaskComponent) taskComps: QueryList<TaskComponent>
  tasks: Task[] = [];


  // task: Task; 
  taskName: string;
  taskDescription: string;

  taskSelect:Task;

  constructor() {
    this.tasks = [
      {
        id: this.createUUID(),
        name: 'Task1',
        description: 'Lorem ipsum dolor '
      },
      {
        id: this.createUUID(),
        name: 'Task2',
        description: 'Lorem ipsum dolor '
      },
      {
        id: this.createUUID(),
        name: 'Task3',
        description: 'Lorem ipsum dolor '
      },
    ]
  }
  ngOnInit(): void {
  }

  addTask() {
    // this.tasks.push(this.task)
    let tempTask: Task = {
      id: this.createUUID(),
      name: this.taskName,
      description: this.taskDescription,
    }
    // console.log(tempTask)
    this.tasks.push(tempTask)
  }


  deleteTask(taskComponent: TaskComponent) {
    // console.log(taskIndex)
    // this.tasks = this.tasks.filter(task => task != taskDetail)
    // this.tasks = this.tasks.filter((task, index) =>
    //   index !== taskIndex)
    // console.log(this.tasks)
    // console.log(taskComponent)
    this.tasks = this.tasks.filter((t) =>
      t !== taskComponent.taskObj)
  }


  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  selectedTask(taskComponent: TaskComponent){
    this.clearSelected()

    taskComponent.isSelected= true;
    this.taskSelect = taskComponent.taskObj;
  }

  clearSelected(){
    this.taskComps.forEach(task => {
      task.isSelected = false;
    })
  }

}
