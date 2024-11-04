import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
addNewTodo() {
this.addTodo.emit(this.todoName)
  // console.log(this.todoName)
}

  @Output() addTodo = new EventEmitter<string>();
  todoName = '';
}
