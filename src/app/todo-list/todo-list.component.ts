import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos: string[] = [];

  addTodo(todo: string): void{
    if(todo.length < 4){
      alert('Zadanie powinno mieć przynajmniej 4 znaki')
      return
    }
    this.todos.push(todo)
    console.log('Aktualna lista todo: ', this.todos)
  }

}
