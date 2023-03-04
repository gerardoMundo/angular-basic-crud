import { Component, Input } from '@angular/core';
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  @Input() todo: Todo;
  @Input() idx: number;
  @Input() arrTodo: any;

  faTrash = faTrash;
  faCheck = faCheck;

  changeState() {
    this.todo.done = true;
    console.log(this.todo);
  }

  deleteTodo(i: number) {
    this.arrTodo.splice(i, 1);
  }
}
