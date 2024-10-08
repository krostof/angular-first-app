import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos: Todo[] = [];

  addTodo(todo: string): void{
    if(todo.length < 4){
      alert('Zadanie powinno mieć przynajmniej 4 znaki')
      return
    }
    this.todos.push({name: todo, isComplete: false})
    console.log('Aktualna lista todo: ', this.todos)
  }

}
