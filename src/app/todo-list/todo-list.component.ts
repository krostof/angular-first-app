import {Component, OnInit} from '@angular/core';
import {Todo} from '../shared/interfaces/todo.interfaces';
import {TodoService} from "../core/services/todo.service";
import {TodoApiService} from "../core/services/todo-api.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  errorMessage = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private todoApiService: TodoApiService) {}

  ngOnInit(): void {
    this.todos = this.todoService.todos
    this.todoApiService.getTodos().subscribe({
      next: todos => {
        console.log(todos);
      }
    })
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  addTodo(todo: string): void {
    if (todo.length < 4) {
      this.errorMessage = 'Zadanie powinno mieć przynajmniej 4 znaki';
      return;
    }
    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
    this.todos = this.todoService.todos;
  }

  changeToDoStatus(index: number) {
    this.todoService.changeToDoStatus(index);
    this.todos = this.todoService.todos;
  }
}
