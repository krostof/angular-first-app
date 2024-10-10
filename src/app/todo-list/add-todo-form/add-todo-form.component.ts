import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
addNewTodo(todoName: string) {
this.addTodo.emit(todoName)
}

  @Output() addTodo = new EventEmitter<string>()
}
