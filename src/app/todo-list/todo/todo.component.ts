import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

@Input() todo!: Todo;
@Input() i!: number;
openModal = false;

changeToDoStatus(todo: Todo) {
  todo.isComplete=!todo.isComplete
}

toggleModal(): void{
  this.openModal=!this.openModal
}

}
