import {Component} from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
  errorMessage = '';

  addTodo(todo: string): void {
    if (todo.length < 4) {
      this.errorMessage = 'Zadanie powinno mieć przynajmniej 4 znaki';
      return;
    }
    this.todos.push({name: todo, isComplete: false});
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('Aktualna lista todo: ', this.todos);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index != i)
  }
}
