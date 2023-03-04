import { Component, Input } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  @Input() todo: Todo;
  @Input() idx: number;

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
}
