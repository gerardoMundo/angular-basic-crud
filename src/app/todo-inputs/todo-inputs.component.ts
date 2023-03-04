import { Component } from '@angular/core';
import { Todo } from '../todo-list/todo.model';

@Component({
  selector: 'app-todo-inputs',
  templateUrl: './todo-inputs.component.html',
  styleUrls: ['./todo-inputs.component.sass'],
})
export class TodoInputsComponent {
  todoInput: string = '';

  todos: Todo[] = [];

  addTodo() {
    let newTodo = new Todo(this.todoInput);
    this.todos.push(newTodo);
    console.log(newTodo.body);
  }
}
