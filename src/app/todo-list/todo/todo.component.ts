import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

// implements OnChanges
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  openModal = false;

  changeToDoStatus(todo: Todo) {
    todo.isComplete=!todo.isComplete
  }

  toggleModal(): void{
    this.openModal=!this.openModal
  }

  deleteTodo() {
    this.delete.emit();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  // console.log(changes);
  // }

}
