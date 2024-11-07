import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos') ?? '');
  constructor() { }

  public get todos(){
    return this._todos.slice();
  }

  addTodo(name: string): void {
    this._todos.push({name: name, isComplete: false});
    this.saveToLocalStorage();
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index != i);
    this.saveToLocalStorage();
  }

  changeToDoStatus(index: number) {
    this._todos[index].isComplete = !this._todos[index].isComplete;
    this.saveToLocalStorage();
  }

  saveToLocalStorage(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

}
