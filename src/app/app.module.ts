import { AppRoutingModule } from './app-routing.module';
import {LOCALE_ID, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {FooterComponent} from "./footer/footer.component";
import {AlertComponent} from "./shared/components/alert/alert.component";
import {AddTodoFormComponent} from "./todo-list/add-todo-form/add-todo-form.component";
import {TodoComponent} from "./todo-list/todo/todo.component";
import {ModalComponent} from "./shared/components/modal/modal.component";
import {FirstLetterUppercasePipe} from "./shared/pipes/first-letter-uppercase.pipe";
import {HomeComponent} from "./home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ChildAComponent } from './todo-list/child-a/child-a.component';
import { ChildBComponent } from './todo-list/child-b/child-b.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent,
    ModalComponent,
    FirstLetterUppercasePipe,
    HomeComponent,
    PageNotFoundComponent,
    TodoDetailsComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ]
})
export class AppModule { }
